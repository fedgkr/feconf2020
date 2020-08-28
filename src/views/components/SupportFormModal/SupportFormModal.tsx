import React, {useCallback} from 'react';
import css from './SupportFormModal.module.scss';
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {setSupportForm} from "@store/slices/supportSlice";
import {useSupportState} from "@store/index";
import ModalContainer from "@components/ModalContainer/ModalContainer";
import PrivateInfoConfirmation from "@components/PrivateInfoConfirmation/PrivateInfoConfirmation";
import GitHubUserMessageForm from "@components/GitHubUserMessageForm/GitHubUserMessageForm";

interface SupportFormModalProps {
  active: boolean;
}

const SupportFormModal: React.FC<SupportFormModalProps> = ({ active }) => {
  const dispatch = useDispatch();
  const { currentUser, authenticating } = useSupportState();
  const afterAuthenticated = authenticating || currentUser;
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
        <motion.p className={css.desc}>
          GitHub 계정으로 사전 등록해주세요. 등록하신 아이디를 통해 프로필 사진과 이름을 수집하며, 응원 메세지와 함께 웹사이트에 게시됩니다. 이메일을 통해 FEConf의 소식을 전달해드립니다.
        </motion.p>
        { afterAuthenticated ? <GitHubUserMessageForm active={active}/> : <PrivateInfoConfirmation/> }
      </div>
    </ModalContainer>
  );
}

export default SupportFormModal;
