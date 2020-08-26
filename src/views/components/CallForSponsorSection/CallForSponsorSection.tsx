import React, {useEffect, useRef, useState} from 'react';
import cc from 'classcat';
import css from './CallForSponsorSection.module.scss';
import RegisterButton from "@components/RegisterButton/RegisterButton";
import {motion} from "framer-motion";
import {useIntersection} from "@utils/hooks/use-intersection";
import callForSponsorMotions from "@motions/callforsponsor.motion";
import AwesomeCircle from '@components/AwesomeCircle/AwesomeCircle';
import dynamic from "next/dynamic";
import { PAGE } from 'src/constants/page';
import DashedCircle from "@components/DashedCircle/DashedCircle";

const SponsorList = dynamic(() => import("@components/SponsorList/SponsorList"));

interface CallForSponsorSectionProps {}

const CallForSponsorSection: React.FC<CallForSponsorSectionProps> = () => {
  const titleRef = useRef();
  const textContainerRef = useRef();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .6, bottom: false });
  const { visible: textContainerVisible } = useIntersection(textContainerRef, { threshold: .5, bottom: false });
  const [renderDynamicComponent, setRenderDynamicComponent] = useState(false);
  useEffect(() => {
    if (!renderDynamicComponent && (titleVisible || textContainerVisible)) {
      setRenderDynamicComponent(true);
    }
  }, [titleVisible, textContainerVisible]);
  return (
    <div id="sponsors" className={css.CallForSponsorSection}>
      <motion.div
        className={css.titleContainer}
        ref={titleRef}
        initial="hidden"
        animate={titleVisible ? 'visible' : 'hidden'}
        variants={callForSponsorMotions.titleContainer}
      >
        <motion.h2 variants={callForSponsorMotions.titleText}>
          BECOME<br/> A SPONSOR
        </motion.h2>
        <motion.div className={cc([css.circle, css.circle1])} variants={callForSponsorMotions.circle1}>
          <AwesomeCircle type={1} />
        </motion.div>
        <motion.div className={cc([css.circle, css.circle2])} variants={callForSponsorMotions.circle2}>
        <AwesomeCircle type={2} />
        </motion.div>
        <motion.div className={cc([css.circle, css.dashedCircle])} variants={callForSponsorMotions.dashedCircle}>
          <DashedCircle/>
        </motion.div>
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
            FEConf2020 후원사로 함께 해주세요
          </motion.h4>
          <motion.p variants={callForSponsorMotions.text}>
            올해도 프런트엔드 개발자들과 함께하는 FEConf2020를 개최합니다.
            <br />
            컨퍼런스 후원을 통해 프런트엔드 개발자 문화를 함께 만들고, 기업 홍보 및 채용 활동 등을 계획해 보세요!
            <br />
            <br />
            FEConf2020은 <strong>온라인</strong>으로 진행합니다.
            <br />
            자세한 내용은 신청 링크에서 확인할 수 있습니다.
          </motion.p>
          <motion.div variants={callForSponsorMotions.text}>
            <RegisterButton link={PAGE.후원사모집_구글폼}>후원사 신청하기</RegisterButton>
          </motion.div>
        </motion.div>
        <SponsorList playable={textContainerVisible}/>
      </div>
    </div>
  );
}

export default CallForSponsorSection;
