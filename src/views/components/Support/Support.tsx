import React, {useEffect, useRef, useState} from 'react';
import css from './Support.module.scss';
import {motion} from "framer-motion";
import preRegistrationMotions from "@motions/pre-registration.motion";
import MotionNumber from "@components/MotionNumber/MotionNumber";
import Message from "@components/PreRegistrationSection/components/Message/Message";
import {useIntersection} from "@utils/hooks/use-intersection";
import {useSupportState} from "@store/index";
import RegisterSupportButton from "@components/RegisterSupportButton/RegisterSupportButton";
import classcat from "classcat";

interface SupportProps {}

const useRotateList = (messageList, active: boolean) => {
  const listRef = useRef<HTMLDivElement>();
  const [messages, setMessages] = useState(messageList);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  useEffect(() => {
    if (active) {
      let timeout;
      const turnPoint = Math.floor(messageList.length / 2);
      const intervalTime = currentIdx ? 1700 : 50;
      const callNext = () => {
        if (currentIdx > turnPoint) {
          const origin = messages.concat([]);
          const head = origin.splice(0, currentIdx);
          setMessages([...origin, ...head]);
          setYOffset(0);
          return setCurrentIdx(0);
        }
        const currentEl = listRef.current.children[currentIdx];
        const { height } = currentEl.getBoundingClientRect();
        const offset = height + 16;
        setYOffset(val => val + offset);
        setCurrentIdx(currentIdx + 1);
      };
      timeout = setTimeout(callNext, intervalTime);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIdx, active, messages]);
  useEffect(() => {
    setMessages(messageList);
    setCurrentIdx(0);
  }, [messageList]);
  return { listRef, yOffset, messages, currentIdx };
}

const Support: React.FC<SupportProps> = () => {
  const { metadata, messageList } = useSupportState();
  const contentRef = useRef();
  const { visible: contentVisible } = useIntersection(contentRef, { threshold: .5, bottom: false });
  const renderable = contentVisible && !!metadata.count;
  const { listRef, yOffset, messages, currentIdx } = useRotateList(messageList, renderable);
  const listStyle = {
    transform: `translateY(-${yOffset}px)`,
    transition: currentIdx === 0 ? '' : 'transform .5s cubic-bezier(0, 0.55, 0.45, 1)',
  };
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
        <div className={css.overflowWrap}>
          <div ref={listRef} style={listStyle}>
            {messages.map((message, idx) => (
              <motion.div
                key={message.user.id}
                className={classcat({
                  [css.messageItem]: true,
                  [css.active]: idx === currentIdx,
                })}
                variants={preRegistrationMotions.message}
              >
                <Message message={message}/>
              </motion.div>
            ))}
          </div>
        </div>
        <div className={css.dimmed}/>
      </motion.div>
    </motion.div>
  );
}

export default Support;
