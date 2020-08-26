import React from 'react';
import css from './DashedCircle.module.scss';

interface DashedCircleProps {}

const DashedCircle: React.FC<DashedCircleProps> = () => {
  return (
    <div className={css.DashedCircle}></div>
  );
}

export default DashedCircle;
