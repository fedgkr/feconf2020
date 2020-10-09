import React, {useMemo, useRef} from 'react';
import css from './SpeakerListSection.module.scss';
import {motion} from "framer-motion";
import SpeakerCardView from "@components/SpeakerCardView/SpeakerCardView";
import AwesomeCircle from "@components/AwesomeCircle/AwesomeCircle";
import {useOffset} from "@utils/hooks/use-window";
import cc from "classcat";
import {useSessionState} from "@store/index";
import {Track} from "@constants/types";
import {useIntersection} from "@utils/hooks/use-intersection";
import speakerListMotions from "@motions/speakerList.motion";
import {useParallel} from "@utils/hooks/use-parallel";

interface SpeakerListSectionProps {}

const useActiveSpeaker = (sessionCnt: number, scrollProgress: number) => {
  const endProgress = 82;
  const rawProgress = scrollProgress / endProgress;
  const progress = Math.min(rawProgress, 1) * 100;
  const divideCnt = sessionCnt - 1;
  const eachViewRatio = 100 / divideCnt;
  const currentIdx = progress / eachViewRatio;
  return Math.floor(rawProgress === 0 ? 0 : currentIdx + 1);
}

const SpeakerListSection: React.FC<SpeakerListSectionProps> = () => {
  const { sessions } = useSessionState();
  const titleRef = useRef<HTMLDivElement>();
  const sectionRef = useRef<HTMLDivElement>();
  const speakerListRef = useRef<HTMLDivElement>();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: 1, bottom: false });
  const offsetInfo = useOffset(sectionRef, true);
  const trackASessionList = useMemo(() => sessions.filter(s => s.track === Track.A), [sessions]);
  const trackBSessionList = useMemo(() => sessions.filter(s => s.track === Track.B), [sessions]);
  const { isFixed, scrollProgress } = useParallel(sectionRef, 0, 20, 620);
  const scrollOpacity = scrollProgress > 90 ? (100 - scrollProgress) / 10 : 1;
  const scrollSize = 5000;
  const activeSpeakerIndex = useActiveSpeaker(sessions.length, scrollProgress);
  return (
    <div ref={sectionRef} className={css.SpeakerListSection} style={{ height: scrollSize }}>
      <motion.div
        className={cc([css.wrapper, isFixed ? css.fixed : ''])}
        style={{ opacity: isFixed ? scrollOpacity : 1 }}
        initial="hidden"
        animate={titleVisible ? 'visible' : 'hidden'}
        variants={speakerListMotions.container}
      >
        <div ref={titleRef} className={css.titleContainer}>
          <div className={css.textContainer}>
            <motion.h2 variants={speakerListMotions.title}>SPEAKERS</motion.h2>
            <motion.h4 variants={speakerListMotions.title}>FEConf2020을 알차게 채워줄 발표자를 소개합니다!</motion.h4>
          </div>
          <div className={css.circle}>
            <AwesomeCircle index={1} size={2} offsetInfo={offsetInfo} />
          </div>
        </div>
        <div ref={speakerListRef} className={css.overflowWrap} style={{ height: scrollSize }}>
          <div className={css.speakerList} style={{
            width: scrollSize,
            transform: `translate3d(-${isFixed ? scrollProgress : 0}%, 0, 0)`,
            opacity: isFixed ? scrollOpacity : 1,
          }}>
            {sessions.map((session, idx) =>
              <SpeakerCardView
                key={session.title}
                speaker={session.speaker}
                active={activeSpeakerIndex === idx}
                preActive={Math.abs(activeSpeakerIndex - idx) === 1}
                order={idx}
                variants={speakerListMotions.item}
              />)}
          </div>
        </div>
        <div className={css.mobileSpeakerList}>
          {[trackASessionList, trackBSessionList].map((list, key) => (
            <motion.div
              key={key}
              className={css.column}
              initial="hidden"
              animate={titleVisible ? 'visible' : 'hidden'}
              variants={speakerListMotions.columnContainer}
            >
              {list.map((session, idx) =>
                <SpeakerCardView
                  key={session.title}
                  speaker={session.speaker}
                  order={idx * 2 + key}
                  variants={speakerListMotions.columnItem}
                />)}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default SpeakerListSection;
