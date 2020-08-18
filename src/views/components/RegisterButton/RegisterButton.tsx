import React from 'react';
import css from './RegisterButton.module.scss';
import SafeLink from "@components/SafeLink/SafeLink";

interface RegisterButtonProps {
  link?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ link = '#', children }) => {
  return (
    <SafeLink className={css.RegisterButton} href={link}>
      { children }
    </SafeLink>
  );
}

export default RegisterButton;
