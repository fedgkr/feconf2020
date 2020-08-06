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
        <RegisterButton/>
      </div>
    </div>
  );
}

export default Header;
