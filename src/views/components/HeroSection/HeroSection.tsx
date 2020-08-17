import React, {useRef} from 'react';
import css from './HeroSection.module.scss';
import MainLogo from "@svgs/MainLogo/MainLogo";
import ArrowDownIcon from "@svgs/ArrowDownIcon/ArrowDownIcon";
import {motion} from "framer-motion";
import {useIntersection} from "@utils/hooks/use-intersection";
import heroMotions from "@motions/hero.motion";
import Scene from 'scenejs';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const sectionRef = useRef();
  const { visible } = useIntersection(sectionRef);

  React.useEffect(() => {
    const scene = new Scene({
      [`.${css.circleBackground}`]: {
        0: {
          "transform": "translate(-35%, -35%) rotate(0deg)",
        },
        20: {
          "transform": "rotate(360deg)",
        },
      },
    }, {
      selector: true,
      iterationCount: "infinite",
    });
    scene.playCSS();

    return () => {
      scene.clear();
    };
  }, []);
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
            <MainLogo/>
          </motion.div>
          <motion.p variants={heroMotions.text}>
            <img src="/images/icons/youtube@2x.png" alt="YouTube"/>
            <span>2020. 10. Coming Soon</span>
          </motion.p>
        </div>
      </div>
      <motion.div className={css.circle} variants={heroMotions.circle}>
        <div className={css.circleBackground}></div>
      </motion.div>
      <motion.div className={css.smallCircle} variants={heroMotions.smallCircle}/>
      <motion.div className={css.dashedCircle} variants={heroMotions.dashedCircle}/>
      <motion.div className={css.dashedSmallCircle} variants={heroMotions.circle}/>
      <div className={css.arrowDownWrap}>
        <ArrowDownIcon/>
      </div>
    </motion.div>
  );
}

export default HeroSection;
