import React, {useRef} from 'react';
import css from './SponsorList.module.scss';
import callForSponsorMotions from "@motions/callforsponsor.motion";
import {motion} from "framer-motion";
import {useIntersection} from "@utils/hooks/use-intersection";

interface SponsorListProps {}

const sponsorList = [
  {
    name: 'Programmers',
    link: 'https://programmers.co.kr',
    image: 'programmers@2x.png',
  },
  {
    name: '우아한형제들',
    link: 'https://www.woowahan.com',
    image: 'woowahan@2x.png',
  },
  {
    name: '네이버',
    link: 'https://www.navercorp.com',
    image: 'naver@2x.png',
  },
  {
    name: '뱅크샐러드',
    link: 'https://rainist.com',
    image: 'banksalad@2x.png',
  },
  {
    name: '마플',
    link: 'https://www.marpple.com/kr/',
    image: 'marpple@2x.png',
  },
  {
    name: '비바리퍼블리카',
    link: 'https://toss.im',
    image: 'toss@2x.png',
  },
  {
    name: 'ncsoft',
    link: 'http://ncsoft.com',
    image: 'nc@2x.png',
  },
  {
    name: 'jetbrains',
    link: 'https://jetbrains.com',
    image: 'jetbrains@2x.png',
  },
  {
    name: 'peoplefund',
    link: 'https://www.peoplefund.co.kr',
    image: 'peoplefund@2x.png',
  },
  {
    name: 'soomgo',
    link: 'https://soomgo.com',
    image: 'soomgo@2x.png',
  },
  {
    name: 'yanolja',
    link: 'https://yanolja.com',
    image: 'yanolja@2x.png',
  },
  {
    name: 'Robert Walters',
    link: 'https://www.robertwalters.co.kr',
    image: 'robert@2x.png',
  },
];

const SponsorList: React.FC<SponsorListProps> = () => {
  const sponsorRef = useRef();
  const { visible: sponsorVisible } = useIntersection(sponsorRef, { threshold: .5, bottom: false });
  return (
    <motion.div
      className={css.SponsorList}
      ref={sponsorRef}
      initial="hidden"
      animate={sponsorVisible ? 'visible' : 'hidden'}
      variants={callForSponsorMotions.sponsorContainer}
    >
      <motion.h4 variants={callForSponsorMotions.sponsorTitle}>지난 후원사</motion.h4>
      <div className={css.sponsorList}>
        {sponsorList.map((sponsor) => (
          <motion.a
            key={sponsor.name}
            className={css.sponsor}
            target="_blank"
            rel="noopener noreferrer"
            href={sponsor.link}
            variants={callForSponsorMotions.sponsor}
          >
            <img src={`/images/sponsors/${sponsor.image}`} alt={sponsor.name}/>
          </motion.a>
        ))}
      </div>
      <div className={css.dimmed}></div>
    </motion.div>
  );
}

export default SponsorList;
