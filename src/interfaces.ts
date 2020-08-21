import type {FirebaseNamespace} from "@firebase/app-types";

declare global {
  interface Window {
    firebase: FirebaseNamespace;
  }
}
