import React from 'react';
import css from './Message.module.scss';

interface MessageProps {}

const Message: React.FC<MessageProps> = () => {
  return (
    <div className={css.Message}>
      <div className={css.profileContainer}>
        <div className={css.profile}>
          <img className={css.image} src="https://avatars0.githubusercontent.com/u/13933210?s=200" alt="Jooyoung Moon"/>
          <span className={css.name}>Jooyoung Moon</span>
        </div>
        <div className={css.sns}>
          <a href="">
            <img src="/images/icons/github@2x.png" alt="GitHub"/>
          </a>
        </div>
      </div>
      <p className={css.textWrap}>
        네 번째 FEconf! 좋은 컨퍼런스 준비해주셔서 감사합니다. 응원합니다💪
      </p>
    </div>
  );
}

export default Message;
