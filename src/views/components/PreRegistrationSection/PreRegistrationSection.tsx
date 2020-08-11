import React from 'react';
import css from './PreRegistrationSection.module.scss';
import RegisterButton from "@components/RegisterButton/RegisterButton";
import Message from "@components/PreRegistrationSection/components/Message/Message";

interface PreRegistrationSectionProps {}

const PreRegistrationSection: React.FC<PreRegistrationSectionProps> = () => {
  return (
    <div className={css.PreRegistrationSection}>
      <div className={css.titleContainer}>
        <div className={css.textContainer}>
          <h2>PRE-REGISTRATION</h2>
          <h4>FEConf 2020을 응원해주세요</h4>
        </div>
        <div className={css.circle}/>
      </div>
      <div className={css.contentContainer}>
        <div className={css.registerContainer}>
          <p>지금까지 응원해주신 분들</p>
          <div className={css.messageNumberWrap}>
            12,350 <span>명</span>
          </div>
          <p>
            FEConf 2020에 관심있으시다면 사전 등록해주세요. 여러분들의 응원으로 더 알찬 세미나를 준비할 수 있습니다.
            등록하신 이메일로 소식을 전달해드릴게요!
          </p>
          <RegisterButton>사전 등록하기</RegisterButton>
        </div>
        <div className={css.messageContainer}>
          <div className={css.messageItem}>
            <Message/>
          </div>
          <div className={css.messageItem}>
            <Message/>
          </div>
          <div className={css.dimmed}/>
        </div>
      </div>
    </div>
  );
}

export default PreRegistrationSection;
