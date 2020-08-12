import React, {useEffect} from 'react';
import css from './HeroSection.module.scss';
import MainLogo from "@svgs/MainLogo/MainLogo";
import ArrowDownIcon from "@svgs/ArrowDownIcon/ArrowDownIcon";
import {motion, useViewportScroll} from "framer-motion";
import {FramerMotions} from "@motions/variants";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className={css.HeroSection}>
      <motion.div {...FramerMotions.fadeIn}>
        <div className={css.mainLogoWrap}>
          <MainLogo/>
          <p><img src="/images/icons/youtube@2x.png" alt="YouTube"/>2020. 10. Coming Soon</p>
        </div>
      </motion.div>
      <div className={css.circle}/>
      <div className={css.arrowDownWrap}>
        <ArrowDownIcon/>
      </div>
    </div>
  );
}

export default HeroSection;
