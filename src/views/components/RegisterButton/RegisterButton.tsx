import React from 'react';
import css from './RegisterButton.module.scss';

interface RegisterButtonProps {
  link?: string;
  text?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ link, text }) => {
  return (
    <a className={css.RegisterButton} target="_blank" href={link}>
      { text || '사전 등록하기' }
    </a>
  );
}

export default RegisterButton;
