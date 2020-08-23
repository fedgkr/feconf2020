import {FirebaseOptions} from "@firebase/app-types";
import {useStore} from "react-redux";
import {setCurrentUser, setSupportForm, setMyMessage, setMessageList} from "@store/slices/supportSlice";
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
    this.base = window.firebase;
    if (!this.base.apps.length) {
      this.base.initializeApp(this.config);
    }
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
    const currentUser = this.base.auth().currentUser;
    const { fetch } = await import('whatwg-fetch');
    const response = await fetch('https://api.github.com/user/13933210').then(res => res.json());
    return currentUser && {
      githubId: currentUser.providerData[0]?.uid,
      id: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      username: response.login,
    };
  };

  private listenSupportMessageList = () => {
    this.supportsCollectionRef.onSnapshot((snapshot) => {
      const result = [];
      snapshot.docs.forEach((doc) => {
        result.push({
          userId: doc.id,
          ...doc.data(),
        });
      });
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

let fireStore: FireStore;

export const useFirebase = () => {
  const store = useStore();
  if (typeof window === 'object' && !fireStore) {
    fireStore = new FireStore(store);
  }
  return {
    fireStore,
  };
}
