import React from 'react';
import cc from 'classcat';
import css from './CallForSponsorSection.module.scss';
import RegisterButton from "@components/RegisterButton/RegisterButton";

interface CallForSponsorSectionProps {}

const CallForSponsorSection: React.FC<CallForSponsorSectionProps> = () => {
  return (
    <div className={css.CallForSponsorSection}>
      <div className={css.titleContainer}>
        <h2>
          BECOME A SPONSOR
          <p>FEConf를 후원해주세요</p>
        </h2>
        <div className={cc([css.circle, css.circle1])}/>
        <div className={cc([css.circle, css.circle2])}/>
      </div>
      <div className={css.contentContainer}>
        <div className={css.registerContainer}>
          <h4>
            국내 최고의 프론트엔드 개발 컨퍼런스<br/>
            FEConf 2020의 후원사를 모집합니다
          </h4>
          <p>
            국내 최대 프론트엔드 개발 컨퍼런스 FEconf 2020에 관심 있으시다면 사전 등록해주세요. 여러분들의 응원으로 더 알찬 세미나를 준비할 수 있습니다. 등록하신 이메일로 소식을 전달해드릴게요!
          </p>
          <RegisterButton>후원사 신청하기</RegisterButton>
        </div>
        <div className={css.sponsorContainer}>
          <h4>지난 후원사</h4>
          <div className={css.sponsorList}>
            <a className={css.sponsor} href="">NAVER</a>
            <a className={css.sponsor} href="">Toss</a>
            <a className={css.sponsor} href="">당근마켓</a>
            <a className={css.sponsor} href="">킹씨소프트</a>
          </div>
          <div className={css.dimmed}></div>
        </div>
      </div>
    </div>
  );
}

export default CallForSponsorSection;
