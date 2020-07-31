import React from 'react';
import css from './Empty.module.scss';

interface EmptyProps {}

const Empty: React.FC<EmptyProps> = () => {
  return (
    <div className={css.Empty}></div>
  );
}

export default Empty;
