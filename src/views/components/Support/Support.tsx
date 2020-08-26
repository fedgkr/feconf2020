import React, {useRef} from 'react';
import css from './Support.module.scss';
import {motion} from "framer-motion";
import preRegistrationMotions from "@motions/pre-registration.motion";
import MotionNumber from "@components/MotionNumber/MotionNumber";
import Message from "@components/PreRegistrationSection/components/Message/Message";
import {useIntersection} from "@utils/hooks/use-intersection";
import {useSupportState} from "@store/index";
import RegisterSupportButton from "@components/RegisterSupportButton/RegisterSupportButton";

interface SupportProps {}

const Support: React.FC<SupportProps> = () => {
  const { metadata, messageList } = useSupportState();
  const contentRef = useRef();
  const { visible: contentVisible } = useIntersection(contentRef, { threshold: .5, bottom: false });
  const renderable = contentVisible && !!metadata.count;
  return (
    <motion.div
      className={css.Support}
      ref={contentRef}
      initial="hidden"
      animate={renderable ? 'visible' : 'hidden'}
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
              targetNumber={metadata.count}
              active={renderable}
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
          <RegisterSupportButton/>
        </motion.div>
      </div>
      <motion.div
        className={css.messageContainer}
        variants={preRegistrationMotions.messageList}
      >
        {messageList.map((message) => (
          <motion.div
            key={message.user.id}
            className={css.messageItem}
            variants={preRegistrationMotions.message}
          >
            <Message message={message}/>
          </motion.div>
        ))}
        <div className={css.dimmed}/>
      </motion.div>
    </motion.div>
  );
}

export default Support;
