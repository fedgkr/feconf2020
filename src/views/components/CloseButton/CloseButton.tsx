import React from 'react';
import css from './CloseButton.module.scss';

interface CloseButtonProps {
  onClick: any;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <svg
      className={css.CloseButton}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      onClick={onClick}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0L44 0 44 44 0 44z"/>
        <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" d="M33 11L11 33M11 11L33 33"/>
      </g>
    </svg>
  );
}

export default CloseButton;
