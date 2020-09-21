import React, {useRef} from 'react';
import css from './SpeakerListSection.module.scss';
import {motion} from "framer-motion";
import SpeakerCardView from "@components/SpeakerCardView/SpeakerCardView";
import AwesomeCircle from "@components/AwesomeCircle/AwesomeCircle";
import {useOffset} from "@utils/hooks/use-window";

interface SpeakerListSectionProps {}

const SpeakerListSection: React.FC<SpeakerListSectionProps> = () => {
  const sectionRef = useRef<HTMLDivElement>();
  const offsetInfo = useOffset(sectionRef, true);
  return (
    <div ref={sectionRef} className={css.SpeakerListSection}>
      <motion.div
        className={css.titleContainer}
      >
        <div className={css.textContainer}>
          <motion.h2>SPEAKERS</motion.h2>
          <motion.h4>FEConf2020을 알차게 채워줄 발표자를 소개합니다!</motion.h4>
        </div>
        <div className={css.circle}>
          <AwesomeCircle index={1} size={2} offsetInfo={offsetInfo} />
        </div>
      </motion.div>
      <div className={css.overflowWrap}>
        <div className={css.speakerList} style={{ width: 2590 }}>
          <SpeakerCardView/>
          <SpeakerCardView/>
          <SpeakerCardView/>
          <SpeakerCardView/>
          <SpeakerCardView/>
          <SpeakerCardView/>
          <SpeakerCardView/>
        </div>
      </div>
    </div>
  );
}

export default SpeakerListSection;
