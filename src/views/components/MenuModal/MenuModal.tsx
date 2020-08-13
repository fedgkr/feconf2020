import React from 'react';
import css from './MenuModal.module.scss';
import Portal from "@components/Portal/Portal";
import {AnimatePresence, motion} from "framer-motion";
import RegisterButton from "@components/RegisterButton/RegisterButton";

interface MenuModalProps {
  active: boolean;
}

const MenuModal: React.FC<MenuModalProps> = ({ active }) => {
  return (
    <Portal>
      <AnimatePresence>
        { active && (
          <motion.div
            className={css.MenuModal}
            initial={{ y: '-100%', opacity: .4 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
          >
            <motion.a className={css.item}>About</motion.a>
            <motion.a className={css.item}>Speakers</motion.a>
            <motion.a className={css.item}>Sponsors</motion.a>
            <motion.a className={css.item}>Notice</motion.a>
            <motion.div className={css.btnWrap}>
              <RegisterButton>사전 등록하기</RegisterButton>
            </motion.div>
          </motion.div>
        ) }
      </AnimatePresence>
    </Portal>
  );
}

export default MenuModal;
