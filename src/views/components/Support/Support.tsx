import React, {useRef} from 'react';
import css from './Support.module.scss';
import {motion} from "framer-motion";
import preRegistrationMotions from "@motions/pre-registration.motion";
import MotionNumber from "@components/MotionNumber/MotionNumber";
import RegisterButton from "@components/RegisterButton/RegisterButton";
import Message from "@components/PreRegistrationSection/components/Message/Message";
import {useIntersection} from "@utils/hooks/use-intersection";

interface SupportProps {}

const Support: React.FC<SupportProps> = () => {
  const contentRef = useRef();
  const { visible: contentVisible } = useIntersection(contentRef, { threshold: .5, bottom: false });
  return (
    <motion.div
      className={css.Support}
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
  );
}

export default Support;
