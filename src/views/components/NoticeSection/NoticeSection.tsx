import React, {useRef} from 'react';
import css from './NoticeSection.module.scss';
import ArrowDownIcon from "@svgs/ArrowDownIcon/ArrowDownIcon";
import {useIntersection} from "@utils/hooks/use-intersection";
import {motion} from "framer-motion";
import noticeMotions from "@motions/notice.motion";
import SafeLink from "@components/SafeLink/SafeLink";
import PlatformList from "@components/PlatformList/PlatformList";
import AwesomeCircle from '@components/AwesomeCircle/AwesomeCircle';

interface NoticeSectionProps {}

const NoticeSection: React.FC<NoticeSectionProps> = () => {
  const titleRef = useRef();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .5, bottom: false });
  return (
    <div className={css.NoticeSection}>
      <motion.div
        className={css.titleContainer}
        ref={titleRef}
        initial="hidden"
        animate={titleVisible ? 'visible' : 'hidden'}
        variants={noticeMotions.titleContainer}
      >
        <div className={css.title}>
          <motion.h2 variants={noticeMotions.titleText}>NOTICE</motion.h2>
          <motion.h4 variants={noticeMotions.titleText}>FEConf 2020의 소식을 전해드립니다</motion.h4>
        </div>
        <motion.div className={css.circle} variants={noticeMotions.circle}>
          <AwesomeCircle type={6} />
        </motion.div>
        <motion.div className={css.dashedCircle} variants={noticeMotions.dashedCircle}/>
      </motion.div>
      <PlatformList/>
    </div>
  );
}

export default NoticeSection;
