import React, {useEffect, useRef, useState} from 'react';
import css from './Header.module.scss';
import HeaderLogo from "@svgs/HeaderLogo/HeaderLogo";
import RegisterButton from "@components/RegisterButton/RegisterButton";
import {motion, useViewportScroll} from "framer-motion";
import classcat from "classcat";
import {useAppState} from "@store/index";
import {setMenuState} from "@store/slices/appSlice";
import {useDispatch} from "react-redux";

interface HeaderProps {}

const useAnimatedHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useViewportScroll();
  const latestScrollYRef = useRef<number>();
  useEffect(() => {
    scrollY.onChange((value) => {
      const shouldHide = value > 100 && latestScrollYRef.current < value;
      setIsVisible(!shouldHide);
      latestScrollYRef.current = value;
    });
    return () => {
      scrollY.clearListeners();
    };
  }, []);
  return { isVisible };
}

const Header: React.FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  const { menuOpen } = useAppState();
  const { isVisible } = useAnimatedHeader();
  return (
    <motion.div
      className={classcat([css.Header, isVisible && css.isVisible])}
      animate={{ y: isVisible ? '0%' : '-100%' }}
    >
      <a className={css.logo} href="/">
        <HeaderLogo/>
      </a>
      <div className={css.menu}>
        <a href="#">About</a>
        <a href="#">Speakers</a>
        <a href="#">Sponsors</a>
        <RegisterButton>사전 등록하기</RegisterButton>
      </div>
      <div className={css.menuBtn} onClick={() => dispatch(setMenuState(!menuOpen))}>
        <div className={css.bar}/>
        <div className={css.bar}/>
      </div>
    </motion.div>
  );
}

export default Header;
