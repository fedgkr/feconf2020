import React, {useEffect, useRef, useState} from 'react';
import css from './NoticeSection.module.scss';
import {useIntersection} from "@utils/hooks/use-intersection";
import {motion} from "framer-motion";
import noticeMotions from "@motions/notice.motion";
import AwesomeCircle from '@components/AwesomeCircle/AwesomeCircle';
import PlatformList from "@components/PlatformList/PlatformList";
import DashedCircle from "@components/DashedCircle/DashedCircle";
import { useOffset } from '@utils/hooks/use-window';

interface NoticeSectionProps {}

const NoticeSection: React.FC<NoticeSectionProps> = () => {
  const titleRef = useRef();
  const { visible: titleVisible } = useIntersection(titleRef, { threshold: .5, bottom: false });
  const [renderDynamicComponent, setRenderDynamicComponent] = useState(false);
  const offsetInfo = useOffset(titleRef, titleVisible);
  useEffect(() => {
    if (!renderDynamicComponent && titleVisible) {
      setRenderDynamicComponent(true);
    }
  }, [titleVisible]);
  return (
    <div id="notice" className={css.NoticeSection}>
      <motion.div
        className={css.titleContainer}
        ref={titleRef}
        initial="hidden"
        animate={titleVisible ? 'visible' : 'hidden'}
        variants={noticeMotions.titleContainer}
      >
        <div className={css.title}>
          <motion.h2 variants={noticeMotions.titleText}>NOTICE</motion.h2>
          <motion.h4 variants={noticeMotions.titleText}>FEConf2020 소식을 전해드립니다</motion.h4>
        </div>
        <motion.div className={css.circle} variants={noticeMotions.circle}>
          <AwesomeCircle index={6} size={2} offsetInfo={offsetInfo} />
        </motion.div>
        <motion.div className={css.dashedCircle} variants={noticeMotions.dashedCircle}>
          <DashedCircle/>
        </motion.div>
      </motion.div>
      <PlatformList/>
    </div>
  );
}

export default NoticeSection;
