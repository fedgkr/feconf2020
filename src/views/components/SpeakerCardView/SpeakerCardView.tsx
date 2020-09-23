import React from 'react';
import css from './SpeakerCardView.module.scss';
import {Speaker} from "@constants/types";

interface SpeakerCardViewProps {
  speaker: Speaker;
}

const SpeakerCardView: React.FC<SpeakerCardViewProps> = ({ speaker }) => {
  return (
    <div className={css.SpeakerCardView}>
      <img src={`/images/speakers/${speaker.name}.png`} alt={speaker.name}/>
      <div className={css.info}>
        <h4 className={css.name}>{speaker.name}</h4>
        <div className={css.role}>
          <p>{speaker.company || ''}</p>
          <p>{speaker.role}</p>
        </div>
      </div>
    </div>
  );
}

export default SpeakerCardView;
