import React from 'react';
import css from './SpeakerCardView.module.scss';
import {Speaker} from "@constants/types";
import {motion} from "framer-motion";

interface SpeakerCardViewProps {
  speaker: Speaker;
  variants?: any;
}

const SpeakerCardView: React.FC<SpeakerCardViewProps> = ({ speaker, variants }) => {
  return (
    <motion.div className={css.SpeakerCardView} variants={variants}>
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
