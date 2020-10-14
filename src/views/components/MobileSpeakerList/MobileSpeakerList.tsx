import React from 'react';
import css from './MobileSpeakerList.module.scss';
import {motion} from "framer-motion";
import speakerListMotions from "@motions/speakerList.motion";
import SpeakerCardView from "@components/SpeakerCardView/SpeakerCardView";
import {Session} from "@constants/types";

interface MobileSpeakerListProps {
  trackASessionList: Session[];
  trackBSessionList: Session[];
  titleVisible: boolean;
}

const MobileSpeakerList: React.FC<MobileSpeakerListProps> = React.memo(({ trackASessionList, trackBSessionList, titleVisible }) => {
  return (
    <div className={css.MobileSpeakerList}>
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
  );
});

export default MobileSpeakerList;
