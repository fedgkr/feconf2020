import {useEffect} from "react";
import * as bodyScrollLock from 'body-scroll-lock';

export const useModal = (active: boolean, ref?) => {
  useEffect(() => {
    if (active) {
      if (ref && ref.current) {
        bodyScrollLock.disableBodyScroll(ref.current);
      }
    } else {
      if (ref && ref.current) {
        bodyScrollLock.enableBodyScroll(ref.current);
      }
    }
    return () => {
      if (ref && ref.current) {
        bodyScrollLock.enableBodyScroll(ref.current);
      }
    };
  }, [active]);
}
