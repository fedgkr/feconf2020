import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {motion, useViewportScroll} from "framer-motion";
import {useDispatch} from "react-redux";
import classcat from "classcat";
import css from './Header.module.scss';
import HeaderLogo from "@svgs/HeaderLogo/HeaderLogo";
import {useAppState} from "@store/index";
import {setMenuState} from "@store/slices/appSlice";
import dynamic from "next/dynamic";
import RegisterSupportButton from "@components/RegisterSupportButton/RegisterSupportButton";

const MenuModal = dynamic(() => import("@components/MenuModal/MenuModal"));

interface HeaderProps {}

const useAnimatedHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useViewportScroll();
  const latestScrollYRef = useRef<number>();
  useEffect(() => {
    scrollY.onChange((value) => {
      const offset = 12;
      const isHeroPosition = value <= 100;
      const isSwipeUp = !isVisible && (latestScrollYRef.current - offset) > value;
      const isSwipeDown = isVisible && latestScrollYRef.current < (value - offset);
      if (isHeroPosition || isSwipeUp) {
        setIsVisible(true);
      } else if (isSwipeDown) {
        setIsVisible(false);
      }
      latestScrollYRef.current = value;
    });
    return () => {
      scrollY.clearListeners();
    };
  }, [isVisible]);
  return { isVisible };
}

const useChangedMenuState = (menuOpen: boolean) => {
  const firstRender = useRef(true);
  const hasMenuStateChanged = useMemo(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return false;
    }
    return true;
  }, [menuOpen]);
  return hasMenuStateChanged;
}

const Header: React.FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  const [menuInitialized, initMenu] = useState(false);
  const { menuOpen } = useAppState();
  const { isVisible } = useAnimatedHeader();
  const hasMenuStateChanged = useChangedMenuState(menuOpen);
  const onNavigateTo = useCallback((evt, target: string) => {
    evt.preventDefault();
    const element = document.getElementById(target);
    element?.scrollIntoView({ block: 'center' });
  }, []);
  useEffect(() => {
    setTimeout(() => initMenu(true));
  }, []);
  return (
    <motion.div
      className={classcat([css.Header, isVisible && css.isVisible])}
      animate={{ y: isVisible || menuOpen ? '0%' : '-100%' }}
    >
      <a className={css.logo} href="/">
        <HeaderLogo/>
      </a>
      <div className={css.menu}>
        <a href="#" onClick={(evt) => onNavigateTo(evt, 'about')}>About</a>
        <a href="#" onClick={(evt) => onNavigateTo(evt, 'speakers')}>Speakers</a>
        <a href="#" onClick={(evt) => onNavigateTo(evt, 'sponsors')}>Sponsors</a>
        <a href="#" onClick={(evt) => onNavigateTo(evt, 'notice')}>Notice</a>
        <RegisterSupportButton/>
      </div>
      <motion.div
        className={css.menuBtn}
        animate={hasMenuStateChanged ? (menuOpen ? 'open' : 'close') : ''}
        onClick={() => dispatch(setMenuState(!menuOpen))}
      >
        <motion.div
          className={css.bar}
          variants={{
            open: { y: [0, 6, 6], rotate: [0, 0, -45], transition: { duration: .3 } },
            close: { y: [6, 6, 0], rotate:  [-45, 0, 0], transition: { duration: .3 } },
          }}
        />
        <motion.div
          className={css.bar}
          variants={{
            open: { y: [0, -6, -6], rotate: [0, 0, 45], transition: { duration: .3 } },
            close: { y: [-6, -6, 0], rotate:  [45, 0, 0], transition: { duration: .3 } },
          }}
        />
      </motion.div>
      { menuInitialized ? <MenuModal active={menuOpen}/> : null }
    </motion.div>
  );
}

export default Header;
