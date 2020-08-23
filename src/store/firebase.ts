import {FirebaseOptions} from "@firebase/app-types";
import {useDispatch, useStore} from "react-redux";
import {useAppState} from "@store/index";
import {setSupportForm, setMyMessage} from "@store/slices/supportSlice";
import {useEffect, useState} from "react";
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
  private afterLoginCallback: Function;
  private dbReady: Promise<boolean>;
  private dbReadyResolver;

  constructor(private store: Store) {
    this.dbReady = new Promise((resolve) => this.dbReadyResolver = resolve);
    this.base = window.firebase;
    if (!this.base.apps.length) {
      this.base.initializeApp(this.config);
    }
    this.db = this.base.firestore();
    this.supportsCollectionRef = this.db.collection('supports');
    this.base.auth().onAuthStateChanged(this.onAuthChanged);
    this.base.auth().getRedirectResult().then(this.afterLogin);
  }

  public getCurrentUser(): User {
    const currentUser = this.base.auth().currentUser;
    return currentUser && {
      id: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
    };
  }

  public async hasPost() {
    await this.dbReady;
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      const response = await this.supportsCollectionRef.doc(currentUser.id).get();
      return response.exists;
    }
    return false;
  }

  public async signIn() {
    await this.dbReady;
    if (!this.getCurrentUser()) {
      this.provider = new this.base.auth.GithubAuthProvider();
      this.provider.addScope('email');
      this.base.auth().signInWithRedirect(this.provider);
    }
    return this.getCurrentUser();
  }

  public async getSupportList() {
    await this.dbReady;
    const snapshot = await this.supportsCollectionRef.get();
    const result = [];
    snapshot.forEach((doc) => {
      result.push({
        userId: doc.id,
        ...doc.data(),
      });
    });
    return result;
  }

  public async post(message: string) {
    await this.dbReady;
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      await this.supportsCollectionRef.doc(currentUser.id).set({
        message,
        user: currentUser,
        createdAt: Date.now(),
      });
    }
  }

  public onAfterLogin(callback) {
    this.afterLoginCallback = callback;
  }

  private afterLogin = (result) => {
    if (result.user && this.afterLoginCallback) {
      this.afterLoginCallback();
    }
  };

  private onAuthChanged = (user) => {
    this.dbReadyResolver();
    if (user) {
      this.supportsCollectionRef.doc(user.uid).onSnapshot((doc) => {
        this.store.dispatch(setMyMessage(doc.data()));
      });
    }

    // this.getSupportList().then(result => {
    //   console.log('result : ', result);
    // });
  };
}

let fireStore: FireStore;

export const useFirebase = () => {
  const store = useStore();
  const dispatch = useDispatch();
  if (typeof window === 'object' && !fireStore) {
    fireStore = new FireStore(store);
    fireStore.onAfterLogin(() => {
      dispatch(setSupportForm(true));
    });
  }
  const [fireState, setFireState] = useState({});
  useEffect(() => {

  }, []);
  return {
    fireStore,
  };
}
