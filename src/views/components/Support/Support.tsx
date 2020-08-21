import React, {useEffect, useRef} from 'react';
import css from './Support.module.scss';
import {motion} from "framer-motion";
import preRegistrationMotions from "@motions/pre-registration.motion";
import MotionNumber from "@components/MotionNumber/MotionNumber";
import RegisterButton from "@components/RegisterButton/RegisterButton";
import Message from "@components/PreRegistrationSection/components/Message/Message";
import {useIntersection} from "@utils/hooks/use-intersection";
import {useFirebase} from "@store/firebase";
import {useDispatch} from "react-redux";
import {setSupportForm} from "@store/slices/appSlice";

interface SupportProps {}

const Support: React.FC<SupportProps> = () => {
  const dispatch = useDispatch();
  const { fireStore } = useFirebase();
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
          사전 등록으로 FEConf2020을 응원해주세요!
          <br />
          여러분들의 응원에 힘입어 더 알찬 FEConf가 찾아갑니다.
          <br />
          등록한 이메일로 FEConf 소식을 받을 수 있어요.
        </motion.p>
        <motion.div variants={preRegistrationMotions.contentText}>
          <RegisterButton onClick={async evt => {
            evt.preventDefault();
            if (!await fireStore.hasPost()) {
              dispatch(setSupportForm(true));
            }
          }}>
            사전 등록하기
          </RegisterButton>
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
