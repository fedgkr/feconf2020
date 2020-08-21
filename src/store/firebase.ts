import {FirebaseOptions} from "@firebase/app-types";
import {useDispatch} from "react-redux";
import {useAppState} from "@store/index";
import {setSupportForm} from "@store/slices/appSlice";
import {useState} from "react";

class FireStore {
  private readonly base: any;
  private readonly db: any;
  private readonly config: FirebaseOptions = {
    apiKey: "AIzaSyCDjMreMj7AriQT1q2pnmNinv1KU67tfEk",
    authDomain: "feconf2020.firebaseapp.com",
    databaseURL: "https://feconf2020.firebaseio.com",
    projectId: "feconf2020",
    storageBucket: "feconf2020.appspot.com",
    messagingSenderId: "864172035891",
    appId: "1:864172035891:web:453b23d9d729d47ea57846",
  };
  private supportsCollectionRef;
  private provider;
  private afterLoginCallback: Function;
  private dbReady: Promise<boolean>;
  private dbReadyResolver;

  constructor() {
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

  private getCurrentUser() {
    return this.base.auth().currentUser && {
      id: this.base.auth().currentUser.uid,
      email: this.base.auth().currentUser.email,
      displayName: this.base.auth().currentUser.displayName,
      photoURL: this.base.auth().currentUser.photoURL,
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
      this.provider = new (this.base as any).auth.GithubAuthProvider();
      this.provider.addScope('support');
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
      const response = await this.supportsCollectionRef.doc(currentUser.id).set({
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

  private onAuthChanged = () => {
    this.dbReadyResolver();
    this.getSupportList().then(result => {
      console.log('result : ', result);
    });
  };
}

let fireStore: FireStore;

export const useFirebase = () => {
  const dispatch = useDispatch();
  if (typeof window === 'object' && !fireStore) {
    fireStore = new FireStore();
    fireStore.onAfterLogin(() => {
      dispatch(setSupportForm(true));
    });
  }
  const { supportFormOpen } = useAppState();
  const [fireState, setFireState] = useState({});
  return {
    fireStore,
  };
}
