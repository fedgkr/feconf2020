import React from 'react';
import css from './MenuModal.module.scss';
import Portal, {PortalWrap} from "@components/Portal/Portal";
import {AnimatePresence, motion} from "framer-motion";
import RegisterButton from "@components/RegisterButton/RegisterButton";
import classcat from "classcat";
import headerMotions from "@motions/header.motion";
import {useDispatch} from "react-redux";
import {setMenuState} from "@store/slices/appSlice";

interface MenuModalProps {
  active: boolean;
  onNavigateTo: Function;
}

const MenuModal: React.FC<MenuModalProps> = ({ active, onNavigateTo }) => {
  const dispatch = useDispatch();
  function onClose() {
    dispatch(setMenuState(false));
  }
  function onNavigateAndClose(evt, target: string) {
    onClose();
    onNavigateTo(evt, target);
  }
  return (
    <Portal>
      <PortalWrap className={classcat([css.container, active ? css.active : ''])} onClick={onClose}>
        <motion.div className={css.dimmed}/>
        <AnimatePresence>
          { active && (
            <motion.div
              className={css.MenuModal}
              initial="closed"
              animate="open"
              exit="closed"
              variants={headerMotions.menu}
              onClick={evt => evt.stopPropagation()}
            >
              <motion.a href="#" className={css.item} variants={headerMotions.menuItem} onClick={(evt) => onNavigateAndClose(evt, 'about')}>About</motion.a>
              <motion.a href="#" className={css.item} variants={headerMotions.menuItem} onClick={(evt) => onNavigateAndClose(evt, 'speakers')}>Speakers</motion.a>
              <motion.a href="#" className={css.item} variants={headerMotions.menuItem} onClick={(evt) => onNavigateAndClose(evt, 'sponsors')}>Sponsors</motion.a>
              <motion.a href="#" className={css.item} variants={headerMotions.menuItem} onClick={(evt) => onNavigateAndClose(evt, 'notice')}>Notice</motion.a>
              <motion.div className={css.btnWrap} variants={headerMotions.menuItem}>
                <RegisterButton>사전 등록하기</RegisterButton>
              </motion.div>
            </motion.div>
          ) }
        </AnimatePresence>
      </PortalWrap>
    </Portal>
  );
}

export default MenuModal;
