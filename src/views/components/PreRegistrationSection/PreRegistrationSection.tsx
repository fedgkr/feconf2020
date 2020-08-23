import React, {useRef} from 'react';
import css from './PreRegistrationSection.module.scss';
import {motion} from "framer-motion";
import {useIntersection} from "@utils/hooks/use-intersection";
import preRegistrationMotions from "@motions/pre-registration.motion";
import AwesomeCircle from '@components/AwesomeCircle/AwesomeCircle';
import Support from "@components/Support/Support";

interface PreRegistrationSectionProps {}

const PreRegistrationSection: React.FC<PreRegistrationSectionProps> = () => {
  const titleRef = useRef();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .7, bottom: false });
  return (
    <div className={css.PreRegistrationSection}>
      <motion.div
        className={css.titleContainer}
        ref={titleRef}
        initial="hidden"
        animate={titleVisible ? 'visible' : 'hidden'}
        variants={preRegistrationMotions.titleContainer}
      >
        <motion.div className={css.circle} variants={preRegistrationMotions.circle}>
          <AwesomeCircle type={1} />
        </motion.div>
        <div className={css.textContainer}>
          <motion.h2 variants={preRegistrationMotions.text}>PRE-REGISTRATION</motion.h2>
          <motion.h4 variants={preRegistrationMotions.text}>FEConf2020을 응원해주세요</motion.h4>
        </div>
      </motion.div>
      <div className={css.contentContainer}>
        <Support/>
      </div>
    </div>
  );
}

export default PreRegistrationSection;
