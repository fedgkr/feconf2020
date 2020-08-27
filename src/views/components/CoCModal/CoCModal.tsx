import React, {useRef} from 'react';
import css from './CoCModal.module.scss';
import Portal, {PortalWrap} from "@components/Portal/Portal";
import classcat from "classcat";
import {AnimatePresence, motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {setCocState} from "@store/slices/appSlice";
import cocMotions from "@motions/coc.motion";
import {useModal} from "@utils/hooks/use-modal";
import CloseButton from "@components/CloseButton/CloseButton";

interface CoCModalProps {
  active: boolean;
}

const CoCModal: React.FC<CoCModalProps> = ({ active }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  function onClose() {
    dispatch(setCocState(false));
  }
  useModal(active);
  return (
    <Portal>
      <PortalWrap ref={ref} className={classcat([css.container, active ? css.active : ''])} onClick={onClose}>
        <AnimatePresence>
          { active && (
            <motion.div
              className={css.CoCModal}
              initial="closed"
              animate="open"
              exit="closed"
              variants={cocMotions.menu}
              onClick={evt => evt.stopPropagation()}
            >
              <CloseButton onClick={onClose}/>
              <motion.h2 className={css.title}>
                Code of Conduct
              </motion.h2>
              <motion.h3 className={css.subTitle}>
                FEConf2020에 참여하는 모든 분은 다음 사항을 준수해주세요.
              </motion.h3>
              <div className={css.content}>
                <div className={css.block}>
                  <h3>다양성</h3>
                  <p>
                    FEConf는 개개인의 정체성과 개성 및 취향을 존중합니다. 하지만 성별, 성 정체성, 외모, 인종, 종교, 지역, 장애, 나이, 국가, 약자 등에 대한 혐오와 폭력은 어떤 방식이라도 허용하지 않습니다.
                  </p>
                </div>
                <div className={css.block}>
                  <h3>사회적 책임</h3>
                  <p>
                    FEConf 참여자는 프론트엔드 분야의 성장에 대한 사회적 책임을 가집니다. 내가 알고 있는 지식은 아무리 작은 것이라도 다른 누군가에 도움을 줄 수 있습니다. 이를 다양한 방법으로 공유하세요.
                  </p>
                </div>
                <div className={css.block}>
                  <h3>서로 돕고 협력하기</h3>
                  <p>
                    참여자의 다양한 배경이 협업과 커뮤니케이션을 방해하는 요소가 될 수 없습니다. 도움을 요청하기 전에 먼저 도움을 주고 자신의 생각을 자유롭게 표현할 수 있는 FEConf가 될 수 있도록 노력해 주세요.
                  </p>
                </div>
                <div className={css.block}>
                  <h3>지식 재산권 및 개인 정보</h3>
                  <p>
                    FEConf는 지식 재산권과 개인 정보 등의 권리를 존중합니다. 지식 재산권을 위배하거나 개인 정보를 침해하는 어떠한 콘텐츠도 FEConf에서 사용할 수 없습니다.
                  </p>
                </div>
                <div className={css.block}>
                  <h3>참여</h3>
                  <p>
                    FEConf의 발전을 위해 도움을 주실 분은 언제든지 환영합니다. feconf@googlegroups.com 으로 메일을 보내주세요.
                  </p>
                </div>
              </div>
            </motion.div>
          ) }
        </AnimatePresence>
      </PortalWrap>
    </Portal>
  );
}

export default CoCModal;
