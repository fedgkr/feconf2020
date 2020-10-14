import React, {useCallback, useMemo, useRef} from 'react';
import css from './SessionListSection.module.scss';
import {motion} from "framer-motion";
import {useSessionState} from "@store/index";
import {setTrack} from "@store/slices/sessionSlice";
import {useDispatch} from "react-redux";
import {Track} from "@constants/types";
import SessionView from "@components/SessionView/SessionView";
import SessionDetailModal from "@components/SessionDetailModal/SessionDetailModal";
import {useIntersection} from "@utils/hooks/use-intersection";
import sessionsMotions from "@motions/sessions.motions";

interface SessionListSectionProps {}

const SessionListSection: React.FC<SessionListSectionProps> = () => {
  const dispatch = useDispatch();
  const { sessions, selectedTrack, selectedSession } = useSessionState();
  const titleRef = useRef<HTMLDivElement>();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .01, bottom: false });
  const onTrackClick = useCallback((evt, track) => {
    evt.preventDefault();
    dispatch(setTrack(track));
  }, []);
  const selectedSessionList = useMemo(() => sessions.filter(session => session.track === selectedTrack), [selectedTrack]);
  return (
    <motion.div
      id="sessions"
      ref={titleRef}
      className={css.SessionListSection}
      initial="hidden"
      animate={titleVisible ? 'visible' : 'hidden'}
      variants={sessionsMotions.container}
    >
      <motion.div className={css.title} variants={sessionsMotions.title}>
        <h2>SESSIONS</h2>
      </motion.div>
      <motion.div className={css.trackSelect} variants={sessionsMotions.title}>
        <a className={selectedTrack === Track.A ? css.selected : ''}
           href="#"
           onClick={e => onTrackClick(e, Track.A)}>
          A TRACK
          <span className={css.border}/>
        </a>
        <a className={selectedTrack === Track.B ? css.selected : ''}
           href="#"
           onClick={e => onTrackClick(e, Track.B)}>
          B TRACK
          <span className={css.border}/>
        </a>
      </motion.div>
      <div className={css.list}>
        {selectedSessionList.map((session, key) =>
          <SessionView key={key} session={session} order={key}/>)}
      </div>
      <SessionDetailModal active={!!selectedSession}/>
    </motion.div>
  );
}

export default SessionListSection;
