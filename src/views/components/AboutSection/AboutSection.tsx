import React from 'react';
import css from './AboutSection.module.scss';

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <div className={css.AboutSection}>
      <div className={css.container}>
        <div className={css.titleContainer}>
          <h3>ABOUT</h3>
          <h2>
            국내 최고의 <br/>
            프론트엔드 개발 <br/>
            컨퍼런스
          </h2>
        </div>
        <div className={css.aboutContainer}>
          <h4>Enjoy Experience Everywhere</h4>
          <p>프론트엔드 개발의 소중한 경험을 공유합니다!</p><br/>
          <p>
            FEConf2020가 여러분을 찾아갑니다. 올해는 오랜시간 준비하여 선정한 다양하고 풍부해진 14개의 발표 세션을 통해 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하려고 합니다.
          </p><br/>
          <p>
            FEConf 공식 <a target="_blank" href="https://www.facebook.com/feconf.kr/">Facebook 페이지</a>를 구독하시면 행사에 대한 정보를 보다 빠르게 받으실 수 있습니다. Facebook 페이지의 공지 사항을 꼭 확인해주세요!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
