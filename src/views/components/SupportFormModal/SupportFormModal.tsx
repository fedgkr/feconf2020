import React, {useCallback, useEffect, useRef, useState} from 'react';
import css from './SupportFormModal.module.scss';
import Portal, {PortalWrap} from "@components/Portal/Portal";
import classcat from "classcat";
import {AnimatePresence, motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {setSupportForm} from "@store/slices/supportSlice";
import {useModal} from "@utils/hooks/use-modal";
import cocMotions from "@motions/coc.motion";
import {useSupportState} from "@store/index";
import CloseButton from "@components/CloseButton/CloseButton";
import {useFirebase} from "@utils/hooks/use-firebase";

interface SupportFormModalProps {
  active: boolean;
}

const useSubmit = (active: boolean) => {
  const postableRef = useRef(true);
  const textRef = useRef<HTMLTextAreaElement>();
  const { fireStoreRef } = useFirebase();
  const onSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (postableRef.current) {
      postableRef.current = false;
      const text = textRef.current.value.trim();
      if (text.length > 140) {
        return alert('응원 메세지는 140자 이내로 입력 가능합니다.')
      }
      fireStoreRef.current.fireStore?.post(text);
    }
  }, []);
  useEffect(() => {
    if (!active) {
      postableRef.current = true;
    }
  }, [active]);
  return {
    textRef,
    onSubmit,
  };
}

const useReregister = (textRef, active: boolean) => {
  const [reregisterState, setReregisterState] = useState(false);
  const onReregister = useCallback((evt) => {
    evt.preventDefault();
    setReregisterState(true);
    setTimeout(() => textRef.current.focus(), 100);
  }, []);
  useEffect(() => {
    if (!active) {
      setReregisterState(false);
    }
  }, [active]);
  return {
    reregisterState,
    onReregister,
  };
}

const SupportFormModal: React.FC<SupportFormModalProps> = ({ active }) => {
  useModal(active);
  const dispatch = useDispatch();
  const { currentUser, myMessage } = useSupportState();
  const { textRef, onSubmit } = useSubmit(active);
  const { reregisterState, onReregister } = useReregister(textRef, active);
  const onClose = useCallback(() => {
    dispatch(setSupportForm(false));
  }, []);
  return (
    <Portal>
      <PortalWrap className={classcat([css.container, active ? css.active : ''])} onClick={onClose}>
        <AnimatePresence>
          { active && (
            <motion.div
              className={css.SupportFormModal}
              initial="closed"
              animate="open"
              exit="closed"
              variants={cocMotions.menu}
              onClick={evt => evt.stopPropagation()}
            >
              <CloseButton onClick={onClose}/>
              <motion.h2 className={css.title}>
                PRE-REGISTRATION
              </motion.h2>
              <motion.h3 className={css.subTitle}>
                FEConf 2020을 응원해주세요
              </motion.h3>
              <motion.p className={css.desc}>
                등록하신 아이디를 통해 프로필 사진과 이름을 수집하며, 응원 메세지와 함께 웹사이트에 게시됩니다. 이메일을 통해 FEConf의 소식을 전달해드립니다.
              </motion.p>
              { currentUser ?
                <motion.form className={css.form} onSubmit={onSubmit}>
                  <img className={css.profileImage} src={currentUser.photoURL} alt={currentUser.displayName}/>
                  <strong className={css.displayName}>{currentUser.displayName}</strong>
                  {currentUser.username ?
                    <span className={css.username}>
                      {currentUser.username}
                    </span> : null
                  }
                  <div className={css.email}>
                    <img src="/images/icons/email@2x.png" alt="Email"/>
                    <span>{currentUser.email}</span>
                  </div>
                  <div className={css.textInput}>
                    <h4>한 줄 응원</h4>
                    <textarea
                      ref={textRef}
                      placeholder="FEConf 2020 응원합니다!"
                      defaultValue={myMessage ? myMessage.message : ''}
                      disabled={myMessage && !reregisterState}
                    />
                  </div>
                  <div className={css.buttonWrap}>
                    { !myMessage || reregisterState ?
                      <button className={css.register} type="submit">사전 등록하기</button> :
                      <button className={css.reregister} onClick={onReregister}>
                        다시 등록하기
                      </button>
                    }
                  </div>
                </motion.form> : null
              }
            </motion.div>
          ) }
        </AnimatePresence>
      </PortalWrap>
    </Portal>
  );
}

export default SupportFormModal;
