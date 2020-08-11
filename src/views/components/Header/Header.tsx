import React from 'react';
import css from './Header.module.scss';
import HeaderLogo from "@svgs/HeaderLogo/HeaderLogo";
import RegisterButton from "@components/RegisterButton/RegisterButton";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={css.Header}>
      <a className={css.logo} href="/">
        <HeaderLogo/>
      </a>
      <div className={css.menu}>
        <a href="#">About</a>
        <a href="#">Speakers</a>
        <a href="#">Sponsors</a>
        <RegisterButton>사전 등록하기</RegisterButton>
      </div>
      <div className={css.menuBtn}>
        <div className={css.bar}/>
        <div className={css.bar}/>
      </div>
    </div>
  );
}

export default Header;
