import React, {useRef} from 'react';
import css from './RegisterSection.module.scss';
import RegisterButton from "@components/RegisterButton/RegisterButton";
import {useIntersection} from "@utils/hooks/use-intersection";
import {motion} from "framer-motion";
import registerMotions from "@motions/register.motion";
import AwesomeCircle from '@components/AwesomeCircle/AwesomeCircle';
import RegisterSupportButton from "@components/RegisterSupportButton/RegisterSupportButton";
import { useOffset } from '@utils/hooks/use-window';

interface RegisterSectionProps {}

const RegisterSection: React.FC<RegisterSectionProps> = () => {
  const titleRef = useRef();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .5, bottom: false });
  const offsetInfo = useOffset(titleRef, titleVisible);
  return (
    <motion.div
      className={css.RegisterSection}
      ref={titleRef}
      initial="hidden"
      animate={titleVisible ? 'visible' : 'hidden'}
      variants={registerMotions.container}
    >
      <div className={css.container}>
        <motion.h2 variants={registerMotions.text}>REGISTER</motion.h2>
        <motion.h4 variants={registerMotions.text}>지금, 바로 등록하세요</motion.h4>
        <motion.div className={css.buttonWrap} variants={registerMotions.text}>
          <RegisterSupportButton/>
        </motion.div>
        <motion.div className={css.circle} variants={registerMotions.circle}>
          <AwesomeCircle index={5} size={2} offsetInfo={offsetInfo} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default RegisterSection;
