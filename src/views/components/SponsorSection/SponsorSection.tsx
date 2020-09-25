import React, {useRef} from 'react';
import css from './SponsorSection.module.scss';
import {motion} from "framer-motion";
import AwesomeCircle from "@components/AwesomeCircle/AwesomeCircle";
import {useOffset} from "@utils/hooks/use-window";
import heroMotions from "@motions/hero.motion";
import DashedCircle from "@components/DashedCircle/DashedCircle";
import SafeLink from "@components/SafeLink/SafeLink";
import {useIntersection} from "@utils/hooks/use-intersection";
import sponsorMotions from "@motions/sponsor.motions";

interface SponsorSectionProps {}

enum Grade {
  Diamond,
  Platinum,
  SpaceProvider,
}

const sponsorList = [
  {
    name: '비바리퍼블리카',
    link: 'https://toss.im/career',
    image: 'toss@2x.png',
    grade: Grade.Diamond,
  },
  {
    name: '우아한테크코스',
    link: 'https://woowacourse.github.io',
    image: 'wooahan-tech@2x.png',
    grade: Grade.SpaceProvider,
  },
  {
    name: '네이버',
    link: 'https://www.navercorp.com',
    image: 'naver@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'coupang',
    link: 'http://ncsoft.com',
    image: 'coupang@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'class101',
    link: 'https://class101.net/',
    image: 'class-101@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'ejn',
    link: 'https://ejn.kr/',
    image: 'ejn@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: '당근마켓',
    link: 'https://www.daangn.com/',
    image: 'carrot@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'buzzvil',
    link: 'https://www.buzzvil.com',
    image: 'buzzvil@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'ncsoft',
    link: 'http://ncsoft.com',
    image: 'nc@2x.png',
    grade: Grade.Platinum,
  },
];

const SponsorSection: React.FC<SponsorSectionProps> = () => {
  const sectionRef = useRef<HTMLDivElement>();
  const offsetInfo = useOffset(sectionRef, true);
  const { visible } = useIntersection(sectionRef, { threshold: .4, bottom: false });
  const diamondSponsorList = sponsorList.filter(s => s.grade === Grade.Diamond);
  const platinumSponsorList = sponsorList.filter(s => s.grade === Grade.Platinum);
  const spaceProviderSponsorList = sponsorList.filter(s => s.grade === Grade.SpaceProvider);
  return (
    <motion.div
      ref={sectionRef}
      className={css.SponsorSection}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      variants={sponsorMotions.container}
    >
      <div className={css.titleContainer}>
        <motion.h2 variants={sponsorMotions.item}>SPONSORS</motion.h2>
        <motion.h4 variants={sponsorMotions.item}>FEConf2020을 후원하는 파트너입니다</motion.h4>
        <motion.div className={css.circle}>
          <AwesomeCircle index={1} size={2} offsetInfo={offsetInfo} />
        </motion.div>
        <motion.div className={css.dashedCircle} variants={heroMotions.dashedCircle}>
          <DashedCircle/>
        </motion.div>
      </div>
      <div className={css.sponsorList}>
        <motion.div className={css.sponsorGradeContainer} variants={sponsorMotions.item}>
          <h3>DIAMOND</h3>
          <div className={css.list}>
            <div className={css.row}>
              { diamondSponsorList.map(s => (
                <SafeLink key={s.name} href={s.link}>
                  <img src={`/images/sponsors/${s.image}`} alt={s.name}/>
                </SafeLink>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div className={css.sponsorGradeContainer} variants={sponsorMotions.item}>
          <h3>Platinum</h3>
          <div className={css.list}>
            { platinumSponsorList
              .reduce((acc, sponsor) => {
                const tail = acc[acc.length - 1];
                if (!tail || tail.length % 2 === 0) {
                  acc.push([]);
                }
                if (acc.length % 2 === 0) {
                  acc.push([]);
                }
                acc[acc.length - 1].push(sponsor);
                return acc;
              }, [])
              .map((sponsorPair, key) => (
                <div key={key} className={css.row}>
                  {sponsorPair.map((sponsor, idx) => (
                    <SafeLink key={idx} href={sponsor.link}>
                      <img src={`/images/sponsors/${sponsor.image}`} alt={sponsor.name}/>
                    </SafeLink>
                  ))}
                </div>
              ))}
          </div>
        </motion.div>
        <motion.div className={css.sponsorGradeContainer} variants={sponsorMotions.item}>
          <h3>장소지원</h3>
          <div className={css.list}>
            <div className={css.row}>
              { spaceProviderSponsorList.map(s => (
                <SafeLink key={s.name} href={s.link}>
                  <img src={`/images/sponsors/${s.image}`} alt={s.name}/>
                </SafeLink>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SponsorSection;
