import React, {useRef} from 'react';
import css from './CallForSpeakerSection.module.scss';
import RegisterButton from "@components/RegisterButton/RegisterButton";
import {motion} from "framer-motion";
import {useIntersection} from "@utils/hooks/use-intersection";
import callForSpeakerMotions from "@motions/callforspeaker.motion";

interface CallForSpeakerSectionProps {}

const CallForSpeakerSection: React.FC<CallForSpeakerSectionProps> = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .4, bottom: false });
  const { visible: contentVisible } = useIntersection(contentRef, { threshold: .5, bottom: false });
  return (
    <motion.div
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
        <motion.div className={css.circle} variants={callForSpeakerMotions.circle}/>
        <motion.div className={css.dashedCircle} variants={callForSpeakerMotions.circle}/>
      </div>
      <div className={css.descriptionContainer}>
        <motion.h4 variants={callForSpeakerMotions.text}>
          국내 최고의 프론트엔드 개발 컨퍼런스 <br/>
          FEConf 2020의 연사자를 모집합니다
        </motion.h4>
        <motion.p variants={callForSpeakerMotions.text}>
          국내 최대 프론트엔드 개발 컨퍼런스 FEconf 2020에 관심있으시다면 사전 등록해주세요. 여러분들의 응원으로 더 알찬 세미나를 준비할 수 있습니다. 등록하신 이메일로 소식을 전달해드릴게요!
        </motion.p>
        <motion.div variants={callForSpeakerMotions.text}>
          <RegisterButton>연사자 신청하기</RegisterButton>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CallForSpeakerSection;
