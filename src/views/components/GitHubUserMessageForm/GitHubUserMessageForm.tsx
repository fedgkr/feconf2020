import React, {useCallback, useEffect, useRef} from 'react';
import css from './GitHubUserMessageForm.module.scss';
import Spinner from "@svgs/Spinner/Spinner";
import {motion} from "framer-motion";
import {useFirebase} from "@utils/hooks/use-firebase";
import {useSupportState} from "@store/index";

interface GitHubUserMessageFormProps {
  active: boolean;
}

const defaultSupportMessage = 'FEConf2020 응원합니다!';
const maxMessageLength = 140;

const useSubmit = (active: boolean, myMessage) => {
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
      if (text === myMessage?.message) {
        return;
      }
      fireStoreRef.fireStore?.post(text || defaultSupportMessage);
    }
  }, [myMessage]);
  useEffect(() => {
    if (!active) {
      postableRef.current = true;
    }
  }, [active]);
  return {
    textRef,
    onSubmit,
  };
};

const GitHubUserMessageForm: React.FC<GitHubUserMessageFormProps> = ({ active }) => {
  const { currentUser, myMessage, authenticating } = useSupportState();
  const { textRef, onSubmit } = useSubmit(active, myMessage);
  return (
    <motion.form className={css.GitHubUserMessageForm} onSubmit={onSubmit}>
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
        />
      </div>
      <div className={css.buttonWrap}>
        { currentUser &&
        <button className={css.register} type="submit">
          { myMessage ? '응원 메세지 수정하기' : '사전 등록하기' }
        </button>}
      </div>
    </motion.form>
  );
}

export default GitHubUserMessageForm;
