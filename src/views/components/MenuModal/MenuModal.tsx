import React from 'react';
import css from './MenuModal.module.scss';
import Portal from "@components/Portal/Portal";
import {AnimatePresence, motion} from "framer-motion";
import RegisterButton from "@components/RegisterButton/RegisterButton";

interface MenuModalProps {
  active: boolean;
}

const animationSet = {
  variants: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      }
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      }
    }
  },
};

const MenuModal: React.FC<MenuModalProps> = ({ active }) => {
  return (
    <Portal>
      <AnimatePresence>
        { active && (
          <motion.div
            className={css.MenuModal}
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                y: '0%',
                opacity: 1,
                transition: {
                  type: 'tween',
                  staggerChildren: .07,
                  delayChildren: .25,
                },
              },
              closed: {
                y: '-100%',
                opacity: 1,
                transition: {
                  type: 'spring',
                  delay: .3,
                  staggerChildren: .05,
                  staggerDirection: -1,
                },
              },
            }}
          >
            <motion.a className={css.item} {...animationSet}>About</motion.a>
            <motion.a className={css.item} {...animationSet}>Speakers</motion.a>
            <motion.a className={css.item} {...animationSet}>Sponsors</motion.a>
            <motion.a className={css.item} {...animationSet}>Notice</motion.a>
            <motion.div className={css.btnWrap} {...animationSet}>
              <RegisterButton>사전 등록하기</RegisterButton>
            </motion.div>
          </motion.div>
        ) }
      </AnimatePresence>
    </Portal>
  );
}

export default MenuModal;
