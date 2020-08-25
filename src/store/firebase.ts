import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {FirebaseOptions} from "@firebase/app-types";
import {setMetaData, setCurrentUser, setSupportForm, setMyMessage, setMessageList} from "@store/slices/supportSlice";
import {Store} from "redux";
import {User} from "./interfaces";

class FireStore {
  private readonly base: any;
  private readonly db: any;
  private readonly config: FirebaseOptions = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    appId: process.env.APP_ID,
  };
  private supportsCollectionRef;
  private provider;

  constructor(private store: Store) {
    this.base = firebase;
    this.base.initializeApp(this.config);
    this.db = this.base.firestore();
    this.supportsCollectionRef = this.db.collection('supports');
    this.registerListeners();
  }

  public signIn() {
    if (!this.base.auth().currentUser) {
      this.provider = new this.base.auth.GithubAuthProvider();
      this.provider.addScope('email');
      this.base.auth().signInWithRedirect(this.provider);
    }
  }

  public async post(message: string) {
    const currentUser = await this.getCurrentUser();
    if (currentUser) {
      try {
        await this.supportsCollectionRef.doc(currentUser.id).set({
          message,
          user: currentUser,
          createdAt: Date.now(),
        });
        this.store.dispatch(setSupportForm(false));
      } catch(err) {
        alert('등록에 실패했습니다.');
      }
    }
  }

  private registerListeners = () => {
    this.base.auth().onAuthStateChanged(this.onAuthChanged);
    this.base.auth().getRedirectResult().then(this.afterLogin);
    this.listenSupportMessageList();
  };

  private getCurrentUser = async (): Promise<User> => {
    let username;
    const currentUser = this.base.auth().currentUser;
    const { fetch } = await import('whatwg-fetch');
    const githubId = currentUser.providerData[0]?.uid;
    if (githubId) {
      const { login } = await fetch(`https://api.github.com/user/${githubId}`).then(res => res.json());
      username = login;
    }
    return currentUser && {
      githubId: currentUser.providerData[0]?.uid,
      id: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      username,
    };
  };

  private listenSupportMetadata = () => {
    this.supportsCollectionRef.docs('metadata').onSnapshot((doc) => {
      console.log('docs : ', doc.data());
      // this.store.dispatch(setMetaData(doc.data()));
    });
  }

  private listenSupportMessageList = () => {
    this.supportsCollectionRef.onSnapshot((snapshot) => {
      const result = [];
      snapshot.docs.forEach((doc) => {
        if (doc.id !== 'metadata') {
          result.push({
            userId: doc.id,
            ...doc.data(),
          });
        }
      });
      result.sort((a, b) => b.createdAt - a.createdAt);
      this.store.dispatch(setMessageList(result));
    });
  };

  private afterLogin = (result) => {
    if (result.user) {
      this.store.dispatch(setSupportForm(true));
    }
  };

  private onAuthChanged = async (user) => {
    if (user) {
      const currentUser = await this.getCurrentUser();
      this.store.dispatch(setCurrentUser(currentUser));
      this.supportsCollectionRef.doc(user.uid).onSnapshot((doc) => {
        this.store.dispatch(setMyMessage(doc.data()));
      });
    }
  };
}

export default FireStore;
