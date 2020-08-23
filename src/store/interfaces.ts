import type {FirebaseNamespace} from "@firebase/app-types";

declare global {
  interface Window {
    firebase: FirebaseNamespace;
  }
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  username?: string;
  photoURL: string;
}

export interface Message {
  message: string;
  createdAt: number;
  user: User;
}
