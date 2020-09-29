import React, {useCallback, useEffect, useRef, useState} from 'react';
import css from './SpeakerCardView.module.scss';
import {Speaker} from "@constants/types";
import {motion} from "framer-motion";
import classcat from "classcat";

interface SpeakerCardViewProps {
  speaker: Speaker;
  order?: number;
  variants?: any;
}

const defaultCardImageStyle = {
  opacity: 1,
};

const useTranslate = (order) => {
  const wrapperEl = useRef<HTMLDivElement>();
  const firstEffect = useRef(true);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const hasOrder = order !== undefined;
  const onIntersect = useCallback(([entry]) => {
    let opacity = 1, transform = 'translate3d(0, 0, 0) scale(1)';
    if (!entry.isIntersecting) {
      const { boundingClientRect: { x } } = entry;
      transform = `translate3d(${x <= 0 ? -150 : 150}px, 0, 0) scale(.9)`;
      opacity = .6;
    }
    const style = hasOrder ? { opacity, transform, transitionDelay: `${firstEffect.current ? order * 80 : 0}ms` } : defaultCardImageStyle;
    setStyle(style);
  }, []);
  useEffect(() => {
    const io = new IntersectionObserver(onIntersect, { threshold: .05 });
    io.observe(wrapperEl.current);
    return () => io.disconnect();
  }, [onIntersect]);
  useEffect(() => {
    const timeout = setTimeout(() => firstEffect.current = false, 500);
    return () => clearTimeout(timeout);
  }, [])
  return { wrapperEl, style };
}

const useBGColor = (order?) => {
  if (order === undefined) {
    return null;
  }
  return css[`color${order % 3}`];
}

const SpeakerCardView: React.FC<SpeakerCardViewProps> = ({ speaker, order, variants }) => {
  const { wrapperEl, style } = useTranslate(order);
  const colorClass = useBGColor(order);
  return (
    <motion.div ref={wrapperEl} className={css.SpeakerCardView} variants={variants}>
      <div style={{ ...style, backgroundImage: `url(/images/speakers/${speaker.name}.png)` }} className={css.imageWrap}>
        <div className={classcat([css.bg, colorClass])}/>
      </div>
      <div className={css.info}>
        <h4 className={css.name}>{speaker.name}</h4>
        <div className={css.role}>
          <p>{speaker.company || ''}</p>
          <p>{speaker.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default SpeakerCardView;
