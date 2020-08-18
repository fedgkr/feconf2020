import React from 'react';
import css from './Message.module.scss';
import SafeLink from "@components/SafeLink/SafeLink";

interface MessageProps {
  name: string;
  username: string;
  text: string;
}

const Message: React.FC<MessageProps> = ({ name, username, text }) => {
  return (
    <div className={css.Message}>
      <div className={css.profileContainer}>
        <div className={css.profile}>
          <img className={css.image} src="https://avatars0.githubusercontent.com/u/13933210?s=200" alt="Jooyoung Moon"/>
          <span className={css.name}>{name}</span>
        </div>
        <div className={css.sns}>
          <SafeLink href={`https://github.com/${username}`}>
            <img src="/images/icons/github@2x.png" alt="GitHub"/>
          </SafeLink>
        </div>
      </div>
      <p className={css.textWrap}>
        {text}
      </p>
    </div>
  );
}

export default Message;
