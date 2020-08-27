import React, {useCallback, useEffect, useRef, useState} from 'react';
import css from './SupportFormModal.module.scss';
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {setSupportForm} from "@store/slices/supportSlice";
import {useSupportState} from "@store/index";
import {useFirebase} from "@utils/hooks/use-firebase";
import Spinner from "@svgs/Spinner/Spinner";
import ModalContainer from "@components/ModalContainer/ModalContainer";
import {useRouter} from "next/router";
import classcat from "classcat";

interface SupportFormModalProps {
  active: boolean;
}

const defaultSupportMessage = 'FEConf 2020 응원합니다!';
const maxMessageLength = 140;

const useSubmit = (active: boolean) => {
  const postableRef = useRef(true);
  const textRef = useRef<HTMLTextAreaElement>();
  const { fireStoreRef } = useFirebase();
  const onSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (postableRef.current) {
      postableRef.current = false;
      const text = textRef.current.value.trim();
      if (text.length > maxMessageLength) {
        return alert('응원 메세지는 140자 이내로 입력 가능합니다.')
      }
      fireStoreRef.fireStore?.post(text || defaultSupportMessage);
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

const useSignIn = () => {
  const router = useRouter();
  const { fireStoreRef } = useFirebase();
  return useCallback(() => {
    try {
      router.replace('/', '/?loginRedirect=github');
      fireStoreRef.fireStore?.signIn();
    } catch(err) {
      console.log('err : ', err.message);
      router.replace('/', '/');
    }
  }, []);
}

const SupportFormModal: React.FC<SupportFormModalProps> = ({ active }) => {
  const dispatch = useDispatch();
  const { currentUser, myMessage, authenticating } = useSupportState();
  const { textRef, onSubmit } = useSubmit(active);
  const [checked, setChecked] = useState(false);
  const { reregisterState, onReregister } = useReregister(textRef, active);
  const isRegistering = !myMessage || reregisterState;
  const needPrivateInfoConfirm = !authenticating && !currentUser;
  const signIn = useSignIn();
  const onClose = useCallback(() => {
    dispatch(setSupportForm(false));
  }, []);
  return (
    <ModalContainer active={active} onClose={onClose}>
      <div className={css.SupportFormModal}>
        <motion.h2 className={css.title}>
          PRE-REGISTRATION
        </motion.h2>
        <motion.h3 className={css.subTitle}>
          FEConf2020을 응원해주세요
        </motion.h3>
        { needPrivateInfoConfirm ?
          <motion.p className={css.desc}>
            GitHub 계정으로 사전 등록해주세요. 등록하신 아이디를 통해 프로필 사진과 이름을 수집하며, 응원 메세지와 함께 웹사이트에 게시됩니다. 이메일을 통해 FEConf의 소식을 전달해드립니다.
          </motion.p> :
          <motion.p className={css.desc}>
            등록하신 아이디를 통해 프로필 사진과 이름을 수집하며, 응원 메세지와 함께 웹사이트에 게시됩니다. 이메일을 통해 FEConf의 소식을 전달해드립니다.
          </motion.p>
        }
        { authenticating || currentUser ?
          <motion.form className={css.form} onSubmit={onSubmit}>
            {authenticating ?
              <div className={css.loading}>
                <Spinner/>
              </div> :
              <div className={css.userInfo}>
                <img className={css.profileImage} src={currentUser?.photoURL} alt={currentUser?.displayName}/>
                <strong className={css.displayName}>{currentUser?.displayName}</strong>
                <span className={css.username}>
                {currentUser?.username}
              </span>
                <div className={css.email}>
                  <img src="/images/icons/email@2x.png" alt="Email"/>
                  <span>{currentUser?.email}</span>
                </div>
              </div>
            }
            <div className={css.textInput}>
              <h4>한 줄 응원</h4>
              <textarea
                ref={textRef}
                placeholder={defaultSupportMessage}
                defaultValue={myMessage?.message || ''}
                maxLength={maxMessageLength}
                disabled={myMessage && !reregisterState}
              />
            </div>
            <div className={css.buttonWrap}>
              { currentUser &&
              (isRegistering ?
                  <button className={css.register} type="submit">사전 등록하기</button> :
                  <button className={css.reregister} onClick={onReregister}>다시 등록하기</button>
              )}
            </div>
          </motion.form> :
          <div>
            <div className={css.infoConfirm}>
              <h4 className={css.confirmTitle}>
                개인정보 수집 및 이용 동의
              </h4>
              <p className={css.confirmContent}>
                1. 수집항목: 이메일, GitHub 유저네임, GitHub 이름, GitHub 프로필 이미지 <br/>
                2. 수집 및 이용목적: 참가자 본인 및 참가 의사 확인,  이메일로 행사 내용 전달 <br/>
                3. 보관 기간: 행사 종료 후 즉시 파기
              </p>
              <div className={css.checkWrap}>
                <input id="cb" type="checkbox" onChange={(evt) => setChecked(evt.target.checked)}/>
                <label htmlFor="cb"/>
                <span>개인정보 수집 및 이용에 동의합니다.</span>
              </div>
            </div>
            <button className={classcat([css.signInBtn, checked ? css.checked : ''])} onClick={checked ? signIn : null}>
              GitHub으로 사전 등록하기
            </button>
          </div>
        }
      </div>
    </ModalContainer>
  );
}

export default SupportFormModal;
