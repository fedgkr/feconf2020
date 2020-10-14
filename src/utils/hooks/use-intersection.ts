import {MutableRefObject, useCallback, useEffect, useMemo, useRef, useState} from 'react';

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
  const [firstVisible, setFirstVisible] = useState(false);

  const onload = useCallback(() => {
    if (ref.current && firstRender.current) {
      setTimeout(() => {
        const { y } = ref.current.getBoundingClientRect();
        const scrollBottomWhenFirstRendered = firstRender.current && y <= 0;
        if (scrollBottomWhenFirstRendered) {
          setVisible(true);
          if (!firstVisible) {
            setFirstVisible(true);
          }
        }
        firstRender.current = false;
      }, 100);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('load', onload);
    return () => {
      window.removeEventListener('load', onload);
    };
  }, [option, ref]);

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

            if (responseToTop) {
              setVisible(isIntersecting);
              if (!firstVisible && isIntersecting) {
                setFirstVisible(true);
              }
            } else if (responseToBottom) {
              setVisible(isIntersecting);
              if (!firstVisible && isIntersecting) {
                setFirstVisible(true);
              }
            }
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
  return useMemo(() => ({ visible, firstVisible }), [visible, firstVisible]);
};
