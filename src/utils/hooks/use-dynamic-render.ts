import {useEffect, useState} from "react";

export const useDynamicRender = (state: boolean) => {
  const [renderState, setRenderState] = useState(false);
  useEffect(() => {
    setTimeout(() => setRenderState(true), 500);
  }, []);
  return renderState;
}
