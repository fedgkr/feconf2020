import {useEffect, useRef} from "react";
import {useStore} from "react-redux";

let loadRequested = false;
let ref = { fireStore: null };

const dynamicLoad = async (store) => {
  const { default: FireStore } = await import("@store/firebase");
  ref.fireStore = new FireStore(store);
}

export const useFirebase = () => {
  const store = useStore();
  useEffect(() => {
    if (!loadRequested) {
      loadRequested = true;
      dynamicLoad(store);
    }
  }, []);
  return {
    fireStoreRef: ref,
  };
}
