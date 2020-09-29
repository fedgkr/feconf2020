import React, {CSSProperties, useCallback, useEffect, useRef, useState} from 'react';
import css from './SpeakerCardView.module.scss';
import {Speaker} from "@constants/types";
import {motion} from "framer-motion";

interface SpeakerCardViewProps {
  speaker: Speaker;
  order?: number;
  variants?: any;
}

const defaultCardImageStyle = {
  opacity: 1,
};

const colorSet = [
  'linear-gradient(209deg, #6cabfe 100%, #ec20c0 -2%), linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))',
  'linear-gradient(209deg, #694ad9 100%, #a29cfe -2%), linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))',
  'linear-gradient(209deg, #f37121 100%, #e91482 -2%), linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))',
];

const useTranslatingImage = (order: number, imageUrl: string) => {
  const wrapperEl = useRef<HTMLDivElement>();
  const firstEffect = useRef(true);
  const [style, setStyle] = useState<CSSProperties>({});
  const hasOrder = order !== undefined;
  const onIntersect = useCallback(([entry]) => {
    let opacity = 1, transform = 'translate3d(0, 0, 0) scale(1)';
    if (!entry.isIntersecting) {
      const { boundingClientRect: { x } } = entry;
      transform = `translate3d(${x <= 0 ? -150 : 150}px, 0, 0) scale(.9)`;
      opacity = .6;
    }
    const style:CSSProperties = hasOrder ? { opacity, transform, transitionDelay: `${firstEffect.current ? order * 80 : 0}ms` } : defaultCardImageStyle;
    const blendColor = colorSet[order % 3];
    style.backgroundImage = `${blendColor}, url(${imageUrl})`;
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
  }, []);
  return { wrapperEl, style };
}

const SpeakerCardView: React.FC<SpeakerCardViewProps> = React.memo(({ speaker, order, variants }) => {
  const { wrapperEl, style } = useTranslatingImage(order, `/images/speakers/${speaker.name}.png`);
  return (
    <motion.div ref={wrapperEl} className={css.SpeakerCardView} variants={variants}>
      <div style={style} className={css.imageWrap}/>
      <div className={css.info}>
        <h4 className={css.name}>{speaker.name}</h4>
        <div className={css.role}>
          <p>{speaker.company || ''}</p>
          <p>{speaker.role}</p>
        </div>
      </div>
    </motion.div>
  );
});

export default SpeakerCardView;
