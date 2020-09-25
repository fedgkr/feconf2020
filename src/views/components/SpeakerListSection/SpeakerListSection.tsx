import React, {MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import css from './SpeakerListSection.module.scss';
import {motion} from "framer-motion";
import SpeakerCardView from "@components/SpeakerCardView/SpeakerCardView";
import AwesomeCircle from "@components/AwesomeCircle/AwesomeCircle";
import {useOffset} from "@utils/hooks/use-window";
import cc from "classcat";
import {useSessionState} from "@store/index";
import {Track} from "@constants/types";

interface SpeakerListSectionProps {}

const useParallel = (containerRef, targetRef, offset: number) => {
  const [isFixed, setFixed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const onScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const { y, height } = containerRef.current.getBoundingClientRect();
      const scrollHeight = height - window.innerHeight + 500;
      const insideOfContainer = y < 0 && y > -scrollHeight;
      const progress = insideOfContainer ? Math.abs(y / scrollHeight) : 1;
      setFixed(insideOfContainer);
      setScrollProgress(progress * 100);
    });
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return {
    isFixed,
    scrollProgress,
  };
}

const SpeakerListSection: React.FC<SpeakerListSectionProps> = () => {
  const { sessions } = useSessionState();
  const sectionRef = useRef<HTMLDivElement>();
  const speakerListRef = useRef<HTMLDivElement>();
  const offsetInfo = useOffset(sectionRef, true);
  const trackASessionList = sessions.filter(s => s.track === Track.A);
  const trackBSessionList = sessions.filter(s => s.track === Track.B);
  const { isFixed, scrollProgress } = useParallel(sectionRef, speakerListRef, 200);
  const scrollOpacity = scrollProgress > 90 ? (100 - scrollProgress) / 10 : 1;
  return (
    <div ref={sectionRef} className={css.SpeakerListSection} style={{ height: 2590 }}>
      <div style={{
        position: isFixed ? 'fixed' : 'relative',
        top: 0,
        opacity: isFixed ? scrollOpacity : 1,
      }}>
        <motion.div className={css.titleContainer}>
          <div className={css.textContainer}>
            <motion.h2>SPEAKERS</motion.h2>
            <motion.h4>FEConf2020을 알차게 채워줄 발표자를 소개합니다!</motion.h4>
          </div>
          <div className={css.circle}>
            <AwesomeCircle index={1} size={2} offsetInfo={offsetInfo} />
          </div>
        </motion.div>
        <div
          ref={speakerListRef}
          className={cc({
            [css.overflowWrap]: true,
          })}
          style={{ height: 5000 }}>
          <div className={css.speakerList} style={{
            width: 5000,
            transform: `translate3d(-${isFixed ? scrollProgress : 0}%, 0, 0)`,
            opacity: isFixed ? scrollOpacity : 1,
          }}>
            {sessions.map(session => <SpeakerCardView key={session.title} speaker={session.speaker}/>)}
          </div>
        </div>
      </div>
      <div className={css.mobileSpeakerList}>
        <div className={css.column}>
          {trackASessionList.map(session => <SpeakerCardView key={session.title} speaker={session.speaker}/>)}
        </div>
        <div className={css.column}>
          {trackBSessionList.map(session => <SpeakerCardView key={session.title} speaker={session.speaker}/>)}
        </div>
      </div>
    </div>
  );
}

export default SpeakerListSection;
