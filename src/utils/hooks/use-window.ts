import { useRef, useEffect, MutableRefObject, useState } from "react";

export interface WindowInfo {
  scroll: number;
  width: number;
  height: number;
  scrollHeight: number;
}
export const windowInfo: WindowInfo = {
  scroll: 0,
  width: 0,
  height: 0,
  scrollHeight: 0,
};

const windowCallbacks: {
  [key: string]: Array<(e: WindowInfo) => ((() => void) | undefined)>,
} = {
  scroll: [],
  resize: [],
};

function scrollCallback() {
  const scrollTop = document.documentElement.scrollTop;
  windowInfo.scroll = scrollTop;
  const afterCallbacks = windowCallbacks.scroll.map(callback => {
    return callback({ ...windowInfo });
  });

  afterCallbacks.forEach(callback => {
    callback && callback();
  });

  return scrollTop;
}
function resizeCallback() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const scrollHeight = document.body.scrollHeight;

  windowInfo.width = width;
  windowInfo.height = height;
  windowInfo.scrollHeight = scrollHeight;

  const afterCallbacks = windowCallbacks.resize.map(callback => {
    return callback({ ...windowInfo });
  });

  afterCallbacks.forEach(callback => {
    callback && callback();
  });

  return windowInfo;
}
function addWindowEvent(
  eventName: string,
  defaultCallback: () => any,
  callback: (e: WindowInfo) => any,
) {
  const callbacks = windowCallbacks[eventName];
  if (!callbacks.length) {
    window.addEventListener(eventName, defaultCallback);
    defaultCallback();
  }
  callbacks.push(callback);
  const afterCallback = callback({ ...windowInfo });


  afterCallback && afterCallback();
  return { ...windowInfo };
}
function removeWindowEvent(
  eventName: string,
  defaultCallback: () => any,
  callback: (e: WindowInfo) => any,
) {
  const callbacks = windowCallbacks[eventName];
  const callbackIndex = callbacks.indexOf(callback);

  if (callbackIndex > -1) {
    callbacks.splice(callbackIndex, 1);
  }
  if (!callbacks.length) {
    window.removeEventListener(eventName, defaultCallback);
  }
}
export function useWindowScroll(callback: (e: WindowInfo) => any, deps: any[] = []) {
  const ref = useRef({ ...windowInfo });

  useEffect(() => {
    function onScroll(e: WindowInfo) {
      ref.current = e;
      return callback(e);
    }
    ref.current = addWindowScroll(onScroll);

    return () => {
      removeWindowScroll(onScroll);
    };
  }, deps);

  return ref;
}
export function getWindowInfo() {
  return windowInfo;
}
export function useWindowResize(callback: (e: { width: number, height: number, scrollHeight: number }) => any, deps: any[] = []) {
  const ref = useRef({ width: windowInfo.width, height: windowInfo.height, scrollHeight: windowInfo.scrollHeight });

  useEffect(() => {
    function onResize(e: { width: number, height: number, scrollHeight: number }) {
      ref.current = e;
      return callback(e);
    }
    ref.current = addWindowResize(onResize);

    return () => {
      removeWindowResize(onResize);
    };
  }, deps);

  return ref;
}
export function addWindowScroll(callback: (e: WindowInfo) => any) {
  return addWindowEvent("scroll", scrollCallback, callback);
}
export function removeWindowScroll(callback: (e: WindowInfo) => any) {
  removeWindowEvent("scroll", scrollCallback, callback);
}
export function addWindowResize(callback: (e: WindowInfo) => any) {
  return addWindowEvent("resize", resizeCallback, callback);
}
export function removeWindowResize(callback: (e: WindowInfo) => any) {
  removeWindowEvent("resize", resizeCallback, callback);
}
export function useOffset(ref: MutableRefObject<HTMLElement>, visible: boolean) {
  const [offsetInfo, setOffsetInfo] = useState({
    top: 0,
    height: 0,
  });

  useWindowResize(() => {
    setOffsetInfo({
      top: ref.current!.offsetTop,
      height: ref.current!.offsetHeight,
    });
  }, []);

  return offsetInfo;
}
