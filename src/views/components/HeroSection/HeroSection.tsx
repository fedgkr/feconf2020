import React, { useRef } from 'react';
import css from './HeroSection.module.scss';
import MainLogo from "@svgs/MainLogo/MainLogo";
import ArrowDownIcon from "@svgs/ArrowDownIcon/ArrowDownIcon";
import { motion } from "framer-motion";
import { useIntersection } from "@utils/hooks/use-intersection";
import heroMotions from "@motions/hero.motion";
import AwesomeCircle from '@components/AwesomeCircle/AwesomeCircle';
import DashedCircle from "@components/DashedCircle/DashedCircle";
import { useOffset } from '@utils/hooks/use-window';

interface HeroSectionProps { }

const HeroSection: React.FC<HeroSectionProps> = () => {
  const sectionRef = useRef<HTMLDivElement>();
  const { visible } = useIntersection(sectionRef);
  const offsetInfo = useOffset(sectionRef, visible);

  return (
    <motion.div
      ref={sectionRef}
      className={css.HeroSection}
      initial="hidden"
      animate={visible ? 'visible' : ''}
    >
      <div>
        <div className={css.mainLogoWrap}>
          <motion.div className={css.logoWrap} variants={heroMotions.logo}>
            <MainLogo />
          </motion.div>
          <motion.p variants={heroMotions.text}>
            <img src="/images/icons/youtube@2x.png" alt="YouTube" />
            <span>2020. 10. 31. Live Streaming</span>
          </motion.p>
        </div>
      </div>
      <motion.div className={css.circle} variants={heroMotions.circle}>
        <AwesomeCircle index={8} size={3} offsetInfo={offsetInfo} />
      </motion.div>
      <motion.div className={css.smallCircle} variants={heroMotions.smallCircle}>
        <AwesomeCircle index={1} size={1} offsetInfo={offsetInfo} />
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
