import React from 'react';
import css from './RegisterButton.module.scss';
import SafeLink from "@components/SafeLink/SafeLink";

interface RegisterButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ link = '#', children, ...rest }) => {
  return (
    <SafeLink className={css.RegisterButton} href={link} {...rest}>
      { children }
    </SafeLink>
  );
}

export default RegisterButton;
