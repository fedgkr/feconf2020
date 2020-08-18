import React, {useRef} from 'react';
import css from './PreRegistrationSection.module.scss';
import RegisterButton from "@components/RegisterButton/RegisterButton";
import Message from "@components/PreRegistrationSection/components/Message/Message";
import {motion} from "framer-motion";
import {useIntersection} from "@utils/hooks/use-intersection";
import preRegistrationMotions from "@motions/pre-registration.motion";
import MotionNumber from "@components/MotionNumber/MotionNumber";

interface PreRegistrationSectionProps {}

const PreRegistrationSection: React.FC<PreRegistrationSectionProps> = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .7, bottom: false });
  const { visible: contentVisible } = useIntersection(contentRef, { threshold: .5, bottom: false });
  return (
    <div className={css.PreRegistrationSection}>
      <motion.div
        className={css.titleContainer}
        ref={titleRef}
        initial="hidden"
        animate={titleVisible ? 'visible' : 'hidden'}
        variants={preRegistrationMotions.titleContainer}
      >
        <div className={css.textContainer}>
          <motion.h2 variants={preRegistrationMotions.text}>PRE-REGISTRATION</motion.h2>
          <motion.h4 variants={preRegistrationMotions.text}>FEConf 2020을 응원해주세요</motion.h4>
        </div>
        <motion.div className={css.circle} variants={preRegistrationMotions.circle}/>
      </motion.div>
      <motion.div
        className={css.contentContainer}
        ref={contentRef}
        initial="hidden"
        animate={contentVisible ? 'visible' : 'hidden'}
        variants={preRegistrationMotions.contentContainer}
      >
        <div className={css.registerContainer}>
          <motion.p variants={preRegistrationMotions.contentText}>지금까지 응원해주신 분들</motion.p>
          <motion.div
            className={css.messageNumberWrap}
            variants={preRegistrationMotions.contentText}
          >
            <h2>
              <MotionNumber
                targetNumber={13752}
                active={contentVisible}
              />
            </h2>
            <span>명</span>
          </motion.div>
          <motion.p variants={preRegistrationMotions.contentText}>
            FEConf 2020에 관심있으시다면 사전 등록해주세요. 여러분들의 응원으로 더 알찬 세미나를 준비할 수 있습니다.
            등록하신 이메일로 소식을 전달해드릴게요!
          </motion.p>
          <motion.div variants={preRegistrationMotions.contentText}>
            <RegisterButton>사전 등록하기</RegisterButton>
          </motion.div>
        </div>
        <motion.div
          className={css.messageContainer}
          variants={preRegistrationMotions.messageList}
        >
          <motion.div className={css.messageItem} variants={preRegistrationMotions.message}>
            <Message
              name="Jooyoung Moon"
              username="codemilli"
              text="네 번째 FEconf! 좋은 컨퍼런스 준비해주셔서 감사합니다. 응원합니다💪"
            />
          </motion.div>
          <motion.div className={css.messageItem} variants={preRegistrationMotions.message}>
            <Message
              name="Jooyoung Moon"
              username="codemilli"
              text="네 번째 FEconf! 좋은 컨퍼런스 준비해주셔서 감사합니다. 응원합니다💪"
            />
          </motion.div>
          <div className={css.dimmed}/>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PreRegistrationSection;
