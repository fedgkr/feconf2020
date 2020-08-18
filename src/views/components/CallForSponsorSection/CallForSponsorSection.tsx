import React, {useRef} from 'react';
import cc from 'classcat';
import css from './CallForSponsorSection.module.scss';
import RegisterButton from "@components/RegisterButton/RegisterButton";
import {motion} from "framer-motion";
import {useIntersection} from "@utils/hooks/use-intersection";
import callForSponsorMotions from "@motions/callforsponsor.motion";
import SponsorList from "@components/SponsorList/SponsorList";
import AwesomeCircle from '@components/AwesomeCircle/AwesomeCircle';

interface CallForSponsorSectionProps {}

const CallForSponsorSection: React.FC<CallForSponsorSectionProps> = () => {
  const titleRef = useRef();
  const textContainerRef = useRef();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .6, bottom: false });
  const { visible: textContainerVisible } = useIntersection(textContainerRef, { threshold: .5, bottom: false });
  return (
    <div className={css.CallForSponsorSection}>
      <motion.div
        className={css.titleContainer}
        ref={titleRef}
        initial="hidden"
        animate={titleVisible ? 'visible' : 'hidden'}
        variants={callForSponsorMotions.titleContainer}
      >
        <motion.h2 variants={callForSponsorMotions.titleText}>
          BECOME<br/> A SPONSOR
          <p>FEConf를 후원해주세요</p>
        </motion.h2>
        <motion.div className={cc([css.circle, css.circle1])} variants={callForSponsorMotions.circle1}>
          <AwesomeCircle type={1} />
        </motion.div>
        <motion.div className={cc([css.circle, css.circle2])} variants={callForSponsorMotions.circle2}>
        <AwesomeCircle type={2} />
        </motion.div>
        <motion.div className={cc([css.circle, css.dashedCircle])} variants={callForSponsorMotions.dashedCircle}/>
      </motion.div>
      <div className={css.contentContainer}>
        <motion.div
          className={css.registerContainer}
          variants={callForSponsorMotions.textContainer}
          ref={textContainerRef}
          initial="hidden"
          animate={textContainerVisible ? 'visible' : 'hidden'}
        >
          <motion.h4 variants={callForSponsorMotions.text}>
            국내 최고의 프론트엔드 개발 컨퍼런스<br/>
            FEConf 2020의 후원사를 모집합니다
          </motion.h4>
          <motion.p variants={callForSponsorMotions.text}>
            국내 최대 프론트엔드 개발 컨퍼런스 FEconf 2020에 관심 있으시다면 사전 등록해주세요. 여러분들의 응원으로 더 알찬 세미나를 준비할 수 있습니다. 등록하신 이메일로 소식을 전달해드릴게요!
          </motion.p>
          <motion.div variants={callForSponsorMotions.text}>
            <RegisterButton>후원사 신청하기</RegisterButton>
          </motion.div>
        </motion.div>
        <SponsorList/>
      </div>
    </div>
  );
}

export default CallForSponsorSection;
