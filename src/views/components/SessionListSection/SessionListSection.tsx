import React from 'react';
import css from './SessionListSection.module.scss';

interface SessionListSectionProps {}

const SessionListSection: React.FC<SessionListSectionProps> = () => {
  return (
    <div className={css.SessionListSection}>
      <div className={css.title}>
        <h2>SESSIONS</h2>
      </div>
    </div>
  );
}

export default SessionListSection;
