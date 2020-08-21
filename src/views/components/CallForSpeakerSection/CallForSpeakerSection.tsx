import React, {useRef} from 'react';
import css from './CallForSpeakerSection.module.scss';
import RegisterButton from "@components/RegisterButton/RegisterButton";
import {motion} from "framer-motion";
import {useIntersection} from "@utils/hooks/use-intersection";
import callForSpeakerMotions from "@motions/callforspeaker.motion";
import AwesomeCircle from '@components/AwesomeCircle/AwesomeCircle';
import { PAGE } from 'src/constants/page';

interface CallForSpeakerSectionProps {}

const CallForSpeakerSection: React.FC<CallForSpeakerSectionProps> = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .4, bottom: false });
  const { visible: contentVisible } = useIntersection(contentRef, { threshold: .5, bottom: false });
  return (
    <motion.div
      id="speakers"
      className={css.CallForSpeakerSection}
      ref={titleRef}
      initial="hidden"
      animate={titleVisible ? 'visible' : 'hidden'}
      variants={callForSpeakerMotions.titleContainer}
    >
      <div className={css.titleContainer}>
        <div className={css.mask}>
          <motion.h2 variants={callForSpeakerMotions.titleText}>BECOME</motion.h2>
        </div>
        <div className={css.mask}>
          <motion.h2 variants={callForSpeakerMotions.titleText}>A SPEAKER</motion.h2>
        </div>
        <motion.div className={css.circle} variants={callForSpeakerMotions.circle}>
          <AwesomeCircle type={3} />
        </motion.div>
        <motion.div className={css.dashedCircle} variants={callForSpeakerMotions.circle}/>
      </div>
      <div className={css.descriptionContainer}>
        <motion.h4 variants={callForSpeakerMotions.text}>
          FEConf2020 발표자가 되어주세요
        </motion.h4>
        <motion.p variants={callForSpeakerMotions.text}>
          소중한 경험을 나누어주실 발표자를 모십니다.
          <br />
          현장의 치열했던 고민과 성장했던 경험을 공유해주세요.
          <br />
          <br />
          FEConf2020은 <strong>사전 녹화</strong>로 진행합니다.
          <br />
          자세한 내용은 신청 링크에서 확인할 수 있습니다.
        </motion.p>
        <motion.div variants={callForSpeakerMotions.text}>
          <RegisterButton link={PAGE.발표자모집_구글폼}>발표자 신청하기</RegisterButton>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CallForSpeakerSection;
