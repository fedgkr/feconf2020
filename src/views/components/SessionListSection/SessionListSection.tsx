import React, {useCallback} from 'react';
import css from './SessionListSection.module.scss';
import {useSessionState} from "@store/index";
import {setTrack} from "@store/slices/sessionSlice";
import {useDispatch} from "react-redux";
import {Track} from "@constants/types";

interface SessionListSectionProps {}

const SessionListSection: React.FC<SessionListSectionProps> = () => {
  const dispatch = useDispatch();
  const { selectedTrack } = useSessionState();
  const onTrackClick = useCallback((evt, track) => {
    evt.preventDefault();
    dispatch(setTrack(track));
  }, []);
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
    </div>
  );
}

export default SessionListSection;
