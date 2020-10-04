import React, {useCallback} from 'react';
import css from './SessionView.module.scss';
import {motion} from "framer-motion";
import {Session} from "@constants/types";
import {setSession} from "@store/slices/sessionSlice";
import {useDispatch} from "react-redux";
import sessionsMotions from "@motions/sessions.motions";

interface SessionViewProps {
  session: Session;
  order: number;
}

const SessionView: React.FC<SessionViewProps> = ({ session, order }) => {
  const dispatch = useDispatch();
  const onSessionClick = useCallback(() => {
    dispatch(setSession(session));
  }, [session]);
  const { title, speaker } = session;
  return (
    <motion.div className={css.SessionView} variants={sessionsMotions.title}>
      <div className={css.iconContainer}>
        <div className={css.circle} style={{ backgroundImage: `url("/images/backgrounds/img-gradient-${order + 1}.png")` }}/>
      </div>
      <div className={css.infoContainer}>
        <h4 className={css.title}>
          {title}
        </h4>
        <p className={css.detail}>{speaker.name} | {speaker.company} {speaker.role}</p>
        <div className={css.buttonContainer}>
          <button onClick={onSessionClick}>자세히 보기</button>
          <button className={css.video}>보러가기</button>
        </div>
      </div>
    </motion.div>
  );
}

export default SessionView;