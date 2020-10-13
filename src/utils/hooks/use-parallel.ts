import {MutableRefObject, useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useStickyState} from "@store/index";
import {getWindowInfo, useWindowResize, useWindowScroll} from "@utils/hooks/use-window";
import {setOffset} from "@store/slices/stickySlice";

export const useParallel = (containerRef: MutableRefObject<HTMLElement>, order: number, offset: number, endOffset: number) => {
  const [isFixed, setFixed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const dispatch = useDispatch();
  const { offsets } = useStickyState();
  const { top: offsetTop, height } = offsets[order];

  const onScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const scrollTop = getWindowInfo().scroll;
      const containerY = offsetTop - scrollTop - offset;
      const insideOfContainer = containerY < 0 && containerY > -height;
      const progress = Math.max(Math.min(-containerY / height, 1), 0);

      setFixed(insideOfContainer);
      setScrollProgress(progress * 100);
    });
  }, [offsetTop, height]);
  useWindowResize(() => {
    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollTop = getWindowInfo().scroll;

    dispatch(setOffset([order, {
      top: top + scrollTop,
      height,
      offset,
      endOffset,
    }]));
    onScroll();
  }, [offsetTop, height]);
  useWindowScroll(onScroll, [offsetTop, height]);
  return {
    isFixed,
    scrollProgress,
  };
}
