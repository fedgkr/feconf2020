import React from 'react';
import css from './HeroSection.module.scss';
import MainLogo from "@svgs/MainLogo/MainLogo";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className={css.HeroSection}>
      <div className={css.mainLogoWrap}>
        <MainLogo/>
        <p>2020. 10. Coming Soon</p>
      </div>
      <div className={css.circle}/>
      <span className={css.arrowDown}/>
    </div>
  );
}

export default HeroSection;
