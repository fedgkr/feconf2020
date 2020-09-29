import React, {useCallback} from 'react';
import css from './SessionDetailModal.module.scss';
import {useDispatch} from "react-redux";
import ModalContainer from "@components/ModalContainer/ModalContainer";
import {setSession} from "@store/slices/sessionSlice";
import {useSessionState} from "@store/index";
import {Session} from "@constants/types";

interface SessionDetailModalProps {
  active: boolean;
}

const getOrder = (sessions: Session[], selectedSession: Session): number => {
  return sessions.filter(s => s.track === selectedSession?.track).reduce<number>((order, session, idx) => {
    if (order) {
      return order;
    }
    if (session.title === selectedSession.title) {
      return idx + 1;
    }
  }, null);
}

const SessionDetailModal: React.FC<SessionDetailModalProps> = ({ active }) => {
  const { sessions, selectedSession } = useSessionState()
  const dispatch = useDispatch();
  const order = getOrder(sessions, selectedSession);
  const onClose = useCallback(() => {
    dispatch(setSession(null));
  }, []);
  return (
    <ModalContainer active={active} maxWidth={700} onClose={onClose}>
      <div className={css.SessionDetailModal}>
        <div className={css.iconContainer}>
          <div className={css.icon} style={{ backgroundImage: `url("/images/backgrounds/img-gradient-${order}.png")` }}/>
        </div>
        <h3 className={css.title}>
          {selectedSession?.title || ' '}
        </h3>
        <div className={css.profile}>
          <div className={css.image} style={{ backgroundImage: `url(/images/speakers/${selectedSession?.speaker.name}.png)` }}/>
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
