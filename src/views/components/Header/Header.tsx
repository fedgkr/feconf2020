import React, {useEffect, useMemo, useRef, useState} from 'react';
import {motion, useCycle, useViewportScroll} from "framer-motion";
import {useDispatch} from "react-redux";
import classcat from "classcat";
import css from './Header.module.scss';
import HeaderLogo from "@svgs/HeaderLogo/HeaderLogo";
import RegisterButton from "@components/RegisterButton/RegisterButton";
import {useAppState} from "@store/index";
import {setMenuState} from "@store/slices/appSlice";
import Portal from "@components/Portal/Portal";
import MenuModal from "@components/MenuModal/MenuModal";

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
  const { menuOpen } = useAppState();
  const { isVisible } = useAnimatedHeader();
  const hasMenuStateChanged = useChangedMenuState(menuOpen);
  return (
    <motion.div
      className={classcat([css.Header, isVisible && css.isVisible])}
      animate={{ y: isVisible || menuOpen ? '0%' : '-100%' }}
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
      <MenuModal active={menuOpen}/>
    </motion.div>
  );
}

export default Header;
