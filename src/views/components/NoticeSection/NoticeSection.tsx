import React, {useRef} from 'react';
import css from './NoticeSection.module.scss';
import ArrowDownIcon from "@svgs/ArrowDownIcon/ArrowDownIcon";
import {useIntersection} from "@utils/hooks/use-intersection";
import {motion} from "framer-motion";
import noticeMotions from "@motions/notice.motion";

interface NoticeSectionProps {}

const NoticeSection: React.FC<NoticeSectionProps> = () => {
  const titleRef = useRef();
  const platformRef = useRef();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .5, bottom: false });
  const { visible: platformVisible } = useIntersection(platformRef, { threshold: .5, bottom: false });
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
        <motion.div className={css.circle} variants={noticeMotions.circle}/>
        <motion.div className={css.dashedCircle} variants={noticeMotions.dashedCircle}/>
      </motion.div>
      <motion.div
        className={css.socialPlatformContainer}
        ref={platformRef}
        initial="hidden"
        animate={platformVisible ? 'visible' : 'hidden'}
        variants={noticeMotions.titleContainer}
      >
        {[...Array(3).keys()].map((i) =>
          <motion.div key={i} className={css.platform} variants={noticeMotions.platform}>
            <div className={css.icon}/>
            <h3>프론트엔드개발그룹</h3>
            <div className={css.mobileTitleWrap}>
              <div className={css.icon}/>
              <h3>프론트엔드개발그룹</h3>
            </div>
            <p>
              프론트엔드개발그룹의 공식 페이스북 그룹
              입니다. 최신 공지사항을 확인할 수 있습니다.
            </p>
            <a href=""> <ArrowDownIcon/> </a>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default NoticeSection;
