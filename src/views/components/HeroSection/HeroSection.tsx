import React, { useRef } from 'react';
import css from './HeroSection.module.scss';
import MainLogo from "@svgs/MainLogo/MainLogo";
import ArrowDownIcon from "@svgs/ArrowDownIcon/ArrowDownIcon";
import { motion } from "framer-motion";
import { useIntersection } from "@utils/hooks/use-intersection";
import heroMotions from "@motions/hero.motion";
import AwesomeCircle from '@components/AwesomeCircle/AwesomeCircle';
import DashedCircle from "@components/DashedCircle/DashedCircle";

interface HeroSectionProps { }

const HeroSection: React.FC<HeroSectionProps> = () => {
  const sectionRef = useRef();
  const { visible } = useIntersection(sectionRef);

  return (
    <motion.div
      ref={sectionRef}
      className={css.HeroSection}
      initial="hidden"
      animate={visible ? 'visible' : ''}
    >
      <div>
        <div className={css.mainLogoWrap}>
          <motion.div variants={heroMotions.logo}>
            <MainLogo />
          </motion.div>
          <motion.p variants={heroMotions.text}>
            <img src="/images/icons/youtube@2x.png" alt="YouTube" />
            <span>2020. 10. Coming Soon</span>
          </motion.p>
        </div>
      </div>
      <motion.div className={css.circle} variants={heroMotions.circle}>
        <AwesomeCircle type={5} />
      </motion.div>
      <motion.div className={css.smallCircle} variants={heroMotions.smallCircle}>
        <AwesomeCircle type={9} />
      </motion.div>
      <motion.div className={css.dashedCircle} variants={heroMotions.dashedCircle}>
        <DashedCircle/>
      </motion.div>
      <motion.div className={css.dashedSmallCircle} variants={heroMotions.circle}>
        <DashedCircle/>
      </motion.div>
      <div className={css.arrowDownWrap}>
        <ArrowDownIcon />
      </div>
    </motion.div>
  );
}

export default HeroSection;
