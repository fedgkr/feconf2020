import React from 'react';
import css from './CallForSpeakerSection.module.scss';
import RegisterButton from "@components/RegisterButton/RegisterButton";

interface CallForSpeakerSectionProps {}

const CallForSpeakerSection: React.FC<CallForSpeakerSectionProps> = () => {
  return (
    <div className={css.CallForSpeakerSection}>
      <div className={css.titleContainer}>
        <h2>BECOME<br/>A SPEAKER</h2>
        <div className={css.circle}/>
      </div>
      <div className={css.descriptionContainer}>
        <h4>
          국내 최고의 프론트엔드 개발 컨퍼런스 <br/>
          FEConf 2020의 연사자를 모집합니다
        </h4>
        <p>
          국내 최대 프론트엔드 개발 컨퍼런스 FEconf 2020에 관심있으시다면 사전 등록해주세요. 여러분들의 응원으로 더 알찬 세미나를 준비할 수 있습니다. 등록하신 이메일로 소식을 전달해드릴게요!
        </p>
        <RegisterButton>연사자 신청하기</RegisterButton>
      </div>
    </div>
  );
}

export default CallForSpeakerSection;
