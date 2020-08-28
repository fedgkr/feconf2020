import React, {useCallback, useEffect, useRef, useState} from 'react';
import css from './SponsorList.module.scss';
import callForSponsorMotions from "@motions/callforsponsor.motion";
import {motion} from "framer-motion";
import {useIntersection} from "@utils/hooks/use-intersection";
import {shuffle} from "@utils/suffle";
import classcat from "classcat";

interface SponsorListProps {
  playable: boolean;
}

const sponsorList = [
  {
    name: '비바리퍼블리카',
    link: 'https://toss.im',
    image: 'toss@2x.png',
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
    name: 'Programmers',
    link: 'https://programmers.co.kr',
    image: 'programmers@2x.png',
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

const useRotateList = (active: boolean) => {
  const [sponsors, setSponsors] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [mouseOverState, setMouseOverState] = useState(false);
  const onMouseOver = useCallback(() => {
    setMouseOverState(true);
  }, []);
  const onMouseOut = useCallback(() => {
    setMouseOverState(false);
  }, []);
  useEffect(() => {
    if (active && !mouseOverState) {
      let timeout;
      const turnPoint = Math.floor(sponsorList.length / 2);
      const intervalTime = currentIdx ? 1100 : 50;
      const callNext = () => {
        if (currentIdx > turnPoint) {
          const origin = sponsors.concat([]);
          const head = origin.splice(0, currentIdx);
          setSponsors([...origin, ...head]);
          return setCurrentIdx(0);
        }
        setCurrentIdx(currentIdx + 1);
      };
      timeout = setTimeout(callNext, intervalTime);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIdx, active, sponsors, mouseOverState]);
  useEffect(() => {
    setSponsors(shuffle(sponsorList));
  }, []);
  return { sponsors, currentIdx, onMouseOver, onMouseOut };
}

const SponsorList: React.FC<SponsorListProps> = ({ playable = false }) => {
  const sponsorRef = useRef();
  const { visible: sponsorVisible } = useIntersection(sponsorRef, { threshold: .5, bottom: false });
  const { sponsors, currentIdx, onMouseOver, onMouseOut } = useRotateList(playable);
  const listStyle = {
    transform: `translateY(-${currentIdx * 92}px)`,
    transition: currentIdx === 0 ? '' : 'transform .5s cubic-bezier(0, 0.55, 0.45, 1)',
  };
  return (
    <motion.div
      className={css.SponsorList}
      ref={sponsorRef}
      initial="hidden"
      animate={sponsorVisible ? 'visible' : 'hidden'}
      variants={callForSponsorMotions.sponsorContainer}
    >
      <motion.h4 variants={callForSponsorMotions.sponsorTitle}>지난 후원사</motion.h4>
      <div className={css.overflowWrap} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        <div
          className={css.sponsorList}
          style={listStyle}>
          {sponsors.map((sponsor, idx) => (
            <div
              key={sponsor.name}
              className={classcat({
                [css.sponsorWrap]: true,
                [css.active]: idx === currentIdx,
              })}>
              <motion.a
                className={css.sponsor}
                target="_blank"
                rel="noopener noreferrer"
                href={sponsor.link}
                variants={callForSponsorMotions.sponsor}
              >
                <img src={`/images/sponsors/${sponsor.image}`} alt={sponsor.name}/>
              </motion.a>
            </div>
          ))}
        </div>
        <div className={css.dimmed}/>
      </div>
    </motion.div>
  );
}

export default SponsorList;
