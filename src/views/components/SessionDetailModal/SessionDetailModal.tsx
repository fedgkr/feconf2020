import React, {useCallback} from 'react';
import css from './SessionDetailModal.module.scss';
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import ModalContainer from "@components/ModalContainer/ModalContainer";
import {setSession} from "@store/slices/sessionSlice";
import {useSessionState} from "@store/index";

interface SessionDetailModalProps {
  active: boolean;
}

const SessionDetailModal: React.FC<SessionDetailModalProps> = ({ active }) => {
  const { selectedSession } = useSessionState()
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(setSession(null));
  }, []);
  return (
    <ModalContainer active={active} maxWidth={700} onClose={onClose}>
      <div className={css.SessionDetailModal}>
        <div className={css.iconContainer}>
          <div className={css.icon}></div>
        </div>
        <h3 className={css.title}>
          {selectedSession?.title || ' '}
        </h3>
        <div className={css.profile}>
          <img src={`/images/speakers/${selectedSession?.speaker.name}.png`} alt={selectedSession?.speaker.name}/>
          <div className={css.textWrap}>
            <span>{selectedSession?.speaker.name}</span>
            <span>{selectedSession?.speaker.company + ' ' + selectedSession?.speaker.role}</span>
          </div>
        </div>
        <p className={css.description}>
          {selectedSession?.title}
        </p>
        <div className={css.buttonWrap}>
          <button>보러가기</button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default SessionDetailModal;
