import React from 'react';
import css from './SpeakerCardView.module.scss';

interface SpeakerCardViewProps {}

const SpeakerCardView: React.FC<SpeakerCardViewProps> = () => {
  return (
    <div className={css.SpeakerCardView}>
      <img src="/images/speakers/1.png" alt=""/>
    </div>
  );
}

export default SpeakerCardView;
