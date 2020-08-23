import {useEffect, useRef} from "react";
import {useStore} from "react-redux";

let loadRequested = false;
let ref = { fireStore: null };

const dynamicLoad = async (store) => {
  const { default: FireStore } = await import("@store/firebase");
  ref.fireStore = new FireStore(store);
}

export const useFirebase = () => {
  const fireStoreRef = useRef(ref);
  const store = useStore();
  useEffect(() => {
    if (!loadRequested) {
      loadRequested = true;
      const onLoad = () => dynamicLoad(store);
      window.addEventListener('load', onLoad);
      return () => {
        window.removeEventListener('load', onLoad);
      };
    }
  }, []);
  return {
    fireStoreRef,
  };
}
