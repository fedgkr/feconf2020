import React from 'react';
import css from './RegisterButton.module.scss';

interface RegisterButtonProps {}

const RegisterButton: React.FC<RegisterButtonProps> = () => {
  return (
    <a className={css.RegisterButton} href="#">사전 등록하기</a>
  );
}

export default RegisterButton;
