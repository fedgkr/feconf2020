import React from 'react';
import css from './YoutubeButton.module.scss';
import SafeLink from "@components/SafeLink/SafeLink";

interface YoutubeButtonProps {
  link: string;
}

const YoutubeButton: React.FC<YoutubeButtonProps> = ({ link }) => {
  return (
    <SafeLink href={link}>
      <button className={css.YoutubeButton}>
        <img src="/images/icons/youtube.png" alt="youtube"/><span>보러가기</span>
      </button>
    </SafeLink>
  );
}

export default YoutubeButton;
