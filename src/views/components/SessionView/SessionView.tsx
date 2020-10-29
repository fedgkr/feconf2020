import React, {useCallback} from 'react';
import css from './SessionView.module.scss';
import {motion} from "framer-motion";
import {Session} from "@constants/types";
import {setSession} from "@store/slices/sessionSlice";
import {useDispatch} from "react-redux";
import sessionsMotions from "@motions/sessions.motions";
import classcat from "classcat";
import {useLiveState} from "@utils/hooks/use-liveState";
import YoutubeButton from "@components/YoutubeButton/YoutubeButton";

interface SessionViewProps {
  session: Session;
  order: number;
}

const SessionView: React.FC<SessionViewProps> = ({ session, order }) => {
  const dispatch = useDispatch();
  const onSessionClick = useCallback(() => {
    dispatch(setSession(session));
  }, [session]);
  const { title, speaker, noDetail } = session;
  const isLive = useLiveState(session);

  return (
    <motion.div className={css.SessionView} variants={sessionsMotions.title}>
      <div className={css.iconContainer}>
        <div className={css.circle} style={{ backgroundImage: `url("/images/backgrounds/img-gradient-${order + 1}.png")` }}/>
      </div>
      <div className={classcat([css.infoContainer, noDetail ? css.center : ''])}>
        <h4 className={css.title}>
          {title}
        </h4>
        <p className={css.detail}>{speaker.name} {speaker.company && `| ${speaker.company}`}</p>
        <div className={css.timeWrap}>
          <div className={css.time}>
            <span>{session.startTime}-{session.endTime}</span>
          </div>
          {isLive ? <img src="/images/icons/live@2x.png" alt="It is streaming now."/> : null}
        </div>
        {!noDetail ?
          <div className={css.buttonContainer}>
            <button onClick={onSessionClick}>자세히 보기</button>
            <YoutubeButton link={session.youtubeLink}/>
          </div> : null
        }
      </div>
    </motion.div>
  );
}

export default SessionView;
