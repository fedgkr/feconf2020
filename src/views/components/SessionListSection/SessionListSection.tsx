import React, {useCallback} from 'react';
import css from './SessionListSection.module.scss';
import {useSessionState} from "@store/index";
import {setTrack} from "@store/slices/sessionSlice";
import {useDispatch} from "react-redux";
import {Track} from "@constants/types";
import SessionView from "@components/SessionView/SessionView";

interface SessionListSectionProps {}

const SessionListSection: React.FC<SessionListSectionProps> = () => {
  const dispatch = useDispatch();
  const { sessions, selectedTrack } = useSessionState();
  const onTrackClick = useCallback((evt, track) => {
    evt.preventDefault();
    dispatch(setTrack(track));
  }, []);
  const selectedSessionList = sessions.filter(session => session.track === selectedTrack);

  return (
    <div className={css.SessionListSection}>
      <div className={css.title}>
        <h2>SESSIONS</h2>
      </div>
      <div className={css.trackSelect}>
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
      </div>
      <div className={css.list}>
        {selectedSessionList.map((session, key) =>
          <SessionView key={key} session={session}/>)}
      </div>
    </div>
  );
}

export default SessionListSection;
