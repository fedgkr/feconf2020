import React from 'react';
import css from './SupportFormModal.module.scss';
import Portal, {PortalWrap} from "@components/Portal/Portal";
import classcat from "classcat";
import {AnimatePresence, motion} from "framer-motion";
import headerMotions from "@motions/header.motion";
import {useDispatch} from "react-redux";
import {setSupportForm} from "@store/slices/appSlice";
import {useModal} from "@utils/hooks/use-modal";
import cocMotions from "@motions/coc.motion";

interface SupportFormModalProps {
  active: boolean;
}

const SupportFormModal: React.FC<SupportFormModalProps> = ({ active }) => {
  const dispatch = useDispatch();
  function onClose() {
    dispatch(setSupportForm(false));
  }
  useModal(active);
  return (
    <Portal>
      <PortalWrap className={classcat([css.container, active ? css.active : ''])} onClick={onClose}>
        <AnimatePresence>
          { active && (
            <motion.div
              className={css.SupportFormModal}
              initial="closed"
              animate="open"
              exit="closed"
              variants={cocMotions.menu}
              onClick={evt => evt.stopPropagation()}
            >
              <motion.h2 className={css.title}>
                PRE-REGISTRATION
              </motion.h2>
              <motion.h3 className={css.subTitle}>
                FEConf 2020을 응원해주세요
              </motion.h3>
              
            </motion.div>
          ) }
        </AnimatePresence>
      </PortalWrap>
    </Portal>
  );
}

export default SupportFormModal;
