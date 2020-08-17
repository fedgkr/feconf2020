import {MutableRefObject, useEffect, useRef, useState} from 'react';

interface IntersectionOption {
  threshold?: number;
  top?: boolean;
  bottom?: boolean;
}

export const useIntersection = (
  ref: MutableRefObject<HTMLElement>,
  option: IntersectionOption = {
    threshold: 0,
    top: true,
    bottom: true,
  }
) => {
  const firstRender = useRef(true);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (ref.current) {
      const { threshold = 0, top = true, bottom = true } = option;
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const {
              isIntersecting,
              boundingClientRect: { y },
            } = entry;
            const responseToTop = top && y >= 0;
            const responseToBottom = bottom && y <= 0;
            const scrollBottomWhenFirstRendered = firstRender.current && y <= 0;
            if (responseToTop) {
              setVisible(isIntersecting);
            } else if (responseToBottom) {
              setVisible(isIntersecting);
            } else if (scrollBottomWhenFirstRendered) {
              setVisible(true);
            }
            firstRender.current = false;
          });
        },
        { threshold },
      );
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [option, ref]);
  return {
    visible,
  };
};
