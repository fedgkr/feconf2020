import React, {useRef} from 'react';
import css from './AboutSection.module.scss';
import {useIntersection} from "@utils/hooks/use-intersection";
import {motion} from "framer-motion";
import aboutMotions from "@motions/about.motion";
import SafeLink from "@components/SafeLink/SafeLink";

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const sectionRef = useRef();
  const { visible } = useIntersection(sectionRef, { threshold: .5, bottom: false });
  return (
    <motion.div
      ref={sectionRef}
      className={css.AboutSection}
    >
      <motion.div
        className={css.container}
        initial="hidden"
        animate={visible ? 'visible' : 'hidden'}
      >
        <motion.div className={css.titleContainer} variants={aboutMotions.titleContainer}>
          <motion.h3 variants={aboutMotions.title}>ABOUT</motion.h3>
          <div className={css.mask}>
            <motion.h2 variants={aboutMotions.subText}>국내 최고의</motion.h2>
          </div>
          <div className={css.mask}>
            <motion.h2 variants={aboutMotions.subText}>프론트엔드 개발</motion.h2>
          </div>
          <div className={css.mask}>
            <motion.h2 variants={aboutMotions.subText}>컨퍼런스</motion.h2>
          </div>
        </motion.div>
        <motion.div className={css.aboutContainer} variants={aboutMotions.aboutContainer}>
          <motion.h4 variants={aboutMotions.aboutText}>Enjoy Experience Everywhere</motion.h4>
          <motion.p variants={aboutMotions.aboutText}>프론트엔드 개발의 소중한 경험을 공유합니다!</motion.p><br/>
          <motion.p variants={aboutMotions.aboutText}>
            FEConf2020가 여러분을 찾아갑니다. 올해는 오랜시간 준비하여 선정한 다양하고 풍부해진 14개의 발표 세션을 통해 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하려고 합니다.
          </motion.p><br/>
          <motion.p variants={aboutMotions.aboutText}>
            FEConf 공식 <SafeLink href="https://www.facebook.com/feconf.kr/">Facebook 페이지</SafeLink>를 구독하시면 행사에 대한 정보를 보다 빠르게 받으실 수 있습니다. Facebook 페이지의 공지 사항을 꼭 확인해주세요!
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutSection;
