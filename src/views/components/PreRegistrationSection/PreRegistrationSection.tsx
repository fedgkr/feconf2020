import React, {useRef} from 'react';
import css from './PreRegistrationSection.module.scss';
import {motion} from "framer-motion";
import {useIntersection} from "@utils/hooks/use-intersection";
import preRegistrationMotions from "@motions/pre-registration.motion";
import AwesomeCircle from '@components/AwesomeCircle/AwesomeCircle';
import Support from "@components/Support/Support";
import { useOffset } from '@utils/hooks/use-window';

interface PreRegistrationSectionProps {}

const PreRegistrationSection: React.FC<PreRegistrationSectionProps> = () => {
  const titleRef = useRef();
  const sectionRef = useRef<HTMLDivElement>();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .7, bottom: false });
  const offsetInfo = useOffset(sectionRef, titleVisible);

  return (
    <div className={css.PreRegistrationSection} ref={sectionRef}>
      <motion.div
        className={css.titleContainer}
        ref={titleRef}
        initial="hidden"
        animate={titleVisible ? 'visible' : 'hidden'}
        variants={preRegistrationMotions.titleContainer}
      >
        <motion.div className={css.circle} variants={preRegistrationMotions.circle}>
          <AwesomeCircle index={1} size={2} offsetInfo={offsetInfo} />
        </motion.div>
        <div className={css.textContainer}>
          <motion.h2 variants={preRegistrationMotions.text}>Thanks for Pre-registration</motion.h2>
          {/*<motion.h4 variants={preRegistrationMotions.text}>FEConf2020을 응원해주세요</motion.h4>*/}
        </div>
      </motion.div>
      <div className={css.contentContainer}>
        <Support/>
      </div>
    </div>
  );
}

export default PreRegistrationSection;
