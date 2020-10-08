import React, {useMemo, useRef} from 'react';
import css from './SponsorSection.module.scss';
import {motion} from "framer-motion";
import AwesomeCircle from "@components/AwesomeCircle/AwesomeCircle";
import {useOffset} from "@utils/hooks/use-window";
import heroMotions from "@motions/hero.motion";
import DashedCircle from "@components/DashedCircle/DashedCircle";
import SafeLink from "@components/SafeLink/SafeLink";
import {useIntersection} from "@utils/hooks/use-intersection";
import sponsorMotions from "@motions/sponsor.motions";
import {useParallel} from "@components/SpeakerListSection/SpeakerListSection";
import classcat from "classcat";
import {Grade, Sponsor} from "@constants/types";
import SponsorGradeContainer from "@components/SponsorGradeContainer/SponsorGradeContainer";
import {sponsorList} from "@resources/data";

interface SponsorSectionProps {}

const usePlatinumSponsorList = (sponsorList) => {
  return useMemo(() => sponsorList.filter(s => s.grade === Grade.Platinum).reduce((acc, sponsor) => {
    if (acc.slice().pop().length >= 2) {
      acc.push([]);
    }
    acc.slice().pop().push(sponsor);
    return acc;
  }, [[]]), [sponsorList]);
}

const SponsorSection: React.FC<SponsorSectionProps> = () => {
  const sectionRef = useRef<HTMLDivElement>();
  const offsetInfo = useOffset(sectionRef, true);
  const { visible } = useIntersection(sectionRef, { threshold: .2, bottom: false });
  const diamondSponsorList = useMemo(() => sponsorList.filter(s => s.grade === Grade.Diamond), [sponsorList]);
  const platinumSponsorList = usePlatinumSponsorList(sponsorList);
  const spaceProviderSponsorList = useMemo(() => sponsorList.filter(s => s.grade === Grade.SpaceProvider), [sponsorList]);
  const { isFixed, scrollProgress } = useParallel(sectionRef, 1, 200, 1200);
  const scrollOpacity = scrollProgress > 80 ? (100 - scrollProgress) / 20 : 1;
  return (
    <div ref={sectionRef} className={css.SponsorSection}>
      <motion.div
        className={css.sponsorList}
        initial="hidden"
        animate={visible ? 'visible' : 'hidden'}
        variants={sponsorMotions.container}
      >
        <SponsorGradeContainer title="DIAMOND" sponsorList={diamondSponsorList}/>
        <SponsorGradeContainer title="Platinum" sponsorList={platinumSponsorList}/>
        <SponsorGradeContainer title="장소지원" sponsorList={spaceProviderSponsorList}/>
      </motion.div>
      <motion.div
        className={css.titleContainer}
        style={{ opacity: isFixed ? scrollOpacity : 1 }}
        initial="hidden"
        animate={visible ? 'visible' : 'hidden'}
        variants={sponsorMotions.titleContainer}
      >
        <div className={classcat([css.wrapper, isFixed ? css.fixed : ''])}>
          <motion.div className={css.circle} variants={heroMotions.dashedCircle}>
            <AwesomeCircle index={1} size={2} offsetInfo={offsetInfo} />
          </motion.div>
          <motion.div className={css.dashedCircle} variants={heroMotions.dashedCircle}>
            <DashedCircle/>
          </motion.div>
          <motion.h2 variants={sponsorMotions.item}>SPONSORS</motion.h2>
          <motion.h4 variants={sponsorMotions.item}>FEConf2020을 후원하는 파트너입니다</motion.h4>
        </div>
      </motion.div>
    </div>
  );
}

export default SponsorSection;
