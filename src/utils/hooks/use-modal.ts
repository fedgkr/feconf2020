import {useEffect, useState} from "react";
import * as bodyScrollLock from 'body-scroll-lock';

export const useModal = (active: boolean, ref?) => {
  const [, forceRender] = useState();
  useEffect(() => {
    if (active && ref?.current) {
      bodyScrollLock.disableBodyScroll(ref.current);
    } else if (!active && ref?.current) {
      bodyScrollLock.enableBodyScroll(ref.current);
    }
  }, [active, ref?.current]);
  useEffect(() => {
    setTimeout(() => forceRender(null), 20);
  }, []);
}
