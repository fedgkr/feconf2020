import React from 'react';
import css from './RegisterSection.module.scss';
import RegisterButton from "@components/RegisterButton/RegisterButton";

interface RegisterSectionProps {}

const RegisterSection: React.FC<RegisterSectionProps> = () => {
  return (
    <div className={css.RegisterSection}>
      <div className={css.container}>
        <h2>REGISTER</h2>
        <h4>지금, 바로 등록하세요</h4>
        <div className={css.buttonWrap}>
          <RegisterButton>사전 등록하기</RegisterButton>
        </div>
        <div className={css.circle}/>
      </div>
    </div>
  );
}

export default RegisterSection;
