import {useCallback, useEffect, useState} from "react";

export const useParallel = (containerRef, offset: number) => {
  const [isFixed, setFixed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const onScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const { y, height: scrollHeight } = containerRef.current.getBoundingClientRect();
      const containerY = -(y - offset);
      const insideOfContainer = containerY > 0 && containerY < scrollHeight;
      const progress = Math.max(Math.min(containerY / scrollHeight, 1), 0);
      setFixed(insideOfContainer);
      setScrollProgress(progress * 100);
    });
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return {
    isFixed,
    scrollProgress,
  };
}
