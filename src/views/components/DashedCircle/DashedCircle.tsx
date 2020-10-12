import React from 'react';
import css from './DashedCircle.module.scss';

interface DashedCircleProps {}

const DashedCircle: React.FC<DashedCircleProps> = React.memo(() => {
  return (
    <div className={css.DashedCircle}/>
  );
});

export default DashedCircle;
