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

const useScroll = (el: MutableRefObject<HTMLDivElement>) => {
  const [isFixed, setFixed] = useState(false);
  const onScroll = useCallback((evt) => {
    const { y, height } = el.current.getBoundingClientRect();
    setFixed(y < 200 && -y < height);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return isFixed;
}

const SpeakerListSection: React.FC<SpeakerListSectionProps> = () => {
  const { sessions } = useSessionState();
  const sectionRef = useRef<HTMLDivElement>();
  const speakerListRef = useRef<HTMLDivElement>();
  const offsetInfo = useOffset(sectionRef, true);
  const isFixed = useScroll(sectionRef);
  const trackASessionList = sessions.filter(s => s.track === Track.A);
  const trackBSessionList = sessions.filter(s => s.track === Track.B);
  return (
    <div ref={sectionRef} className={css.SpeakerListSection}>
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
        style={{ height: 2590 }}>
        <div className={css.speakerList} style={{ width: 2590 }}>
          {sessions.map(session => <SpeakerCardView key={session.title} speaker={session.speaker}/>)}
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
