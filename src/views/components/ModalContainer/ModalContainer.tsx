import React, {useRef} from 'react';
import css from './ModalContainer.module.scss';
import Portal, {PortalWrap} from "@components/Portal/Portal";
import classcat from "classcat";
import cocMotions from "@motions/coc.motion";
import {AnimatePresence, motion} from "framer-motion";
import {useModal} from "@utils/hooks/use-modal";
import CloseButton from "@components/CloseButton/CloseButton";

interface ModalContainerProps {
  active: boolean;
  maxWidth?: number;
  onClose: Function;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children, active, maxWidth, onClose }) => {
  const ref = useRef<HTMLDivElement>();
  useModal(active, ref);
  return (
    <Portal>
      <PortalWrap className={classcat([css.container, active ? css.active : ''])} onClick={onClose}>
        <div className={css.dimmed}/>
        <AnimatePresence>
          { active ?
            <motion.div
              className={css.ModalContainer}
              initial="closed"
              animate="open"
              exit="closed"
              variants={cocMotions.menu}
              onClick={e => e.stopPropagation()}
            >
              <div className={css.closeBtn}>
                <CloseButton onClick={onClose}/>
              </div>
              <div ref={ref} className={css.overflowWrap}>
                <div className={css.wrapper} style={ maxWidth ? { maxWidth } : {}}>
                  <CloseButton onClick={onClose}/>
                  {children}
                </div>
              </div>
            </motion.div>
            : null
          }
        </AnimatePresence>
      </PortalWrap>
    </Portal>
  );
}

export default ModalContainer;
