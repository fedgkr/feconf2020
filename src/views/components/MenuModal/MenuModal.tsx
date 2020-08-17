import React from 'react';
import css from './MenuModal.module.scss';
import Portal, {PortalWrap} from "@components/Portal/Portal";
import {AnimatePresence, motion} from "framer-motion";
import RegisterButton from "@components/RegisterButton/RegisterButton";
import classcat from "classcat";
import headerMotions from "@motions/header.motion";

interface MenuModalProps {
  active: boolean;
}

const MenuModal: React.FC<MenuModalProps> = ({ active }) => {
  return (
    <Portal>
      <PortalWrap className={classcat([css.container, active ? css.active : ''])}>
        <AnimatePresence>
          { active && (
            <motion.div
              className={css.MenuModal}
              initial="closed"
              animate="open"
              exit="closed"
              variants={headerMotions.menu}
            >
              <motion.a className={css.item} variants={headerMotions.menuItem}>About</motion.a>
              <motion.a className={css.item} variants={headerMotions.menuItem}>Speakers</motion.a>
              <motion.a className={css.item} variants={headerMotions.menuItem}>Sponsors</motion.a>
              <motion.a className={css.item} variants={headerMotions.menuItem}>Notice</motion.a>
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
