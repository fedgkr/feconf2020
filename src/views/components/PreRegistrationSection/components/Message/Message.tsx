import React from 'react';
import css from './Message.module.scss';
import SafeLink from "@components/SafeLink/SafeLink";
import {Message as IMessage} from "@store/interfaces";

interface MessageProps {
  message: IMessage;
}

const Message: React.FC<MessageProps> = ({ message: { user, message } }) => {
  const displayName = (user.displayName || user.username) || '';
  return (
    <div className={css.Message}>
      <div className={css.profileContainer}>
        <div className={css.profile}>
          <img className={css.image} src={user.photoURL} alt={displayName}/>
          <span className={css.name}>{displayName}</span>
        </div>
        <div className={css.sns}>
          <SafeLink href={`https://github.com/${user.username}`}>
            <img src="/images/icons/github@2x.png" alt="GitHub"/>
          </SafeLink>
        </div>
      </div>
      <p className={css.textWrap}>
        {message}
      </p>
    </div>
  );
}

export default Message;
