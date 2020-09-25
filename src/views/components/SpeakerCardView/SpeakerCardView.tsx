import React from 'react';
import css from './SpeakerCardView.module.scss';
import {Speaker} from "@constants/types";
import {motion} from "framer-motion";
import speakerListMotions from "@motions/speakerList.motion";

interface SpeakerCardViewProps {
  speaker: Speaker;
}

const SpeakerCardView: React.FC<SpeakerCardViewProps> = ({ speaker }) => {
  return (
    <motion.div className={css.SpeakerCardView} variants={speakerListMotions.item}>
      <img src={`/images/speakers/${speaker.name}.png`} alt={speaker.name} draggable={false}/>
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
