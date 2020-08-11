import React from 'react';
import css from './RegisterButton.module.scss';

interface RegisterButtonProps {
  link?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ link = '#', children }) => {
  return (
    <a className={css.RegisterButton} target="_blank" rel="noopener noreferrer" href={link}>
      { children }
    </a>
  );
}

export default RegisterButton;
