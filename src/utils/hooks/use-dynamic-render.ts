import {useEffect, useState} from "react";

export const useDynamicRender = (state: boolean) => {
  const [renderState, setRenderState] = useState(false);
  useEffect(() => {
    if (state) {
      setRenderState(true);
    }
  }, [state]);
  return renderState;
}
