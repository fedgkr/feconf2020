import React, {useRef} from 'react';
import css from './PlatformList.module.scss';
import noticeMotions from "@motions/notice.motion";
import {motion} from "framer-motion";
import SafeLink from "@components/SafeLink/SafeLink";
import ArrowDownIcon from "@svgs/ArrowDownIcon/ArrowDownIcon";
import {useIntersection} from "@utils/hooks/use-intersection";

interface PlatformListProps {}

const platformData = [{
  name: 'facebook',
  title: 'FEConf 페이스북',
  desc: '프론트엔드개발그룹의 공식 페이스북 그룹입니다. 최신 공지사항을 확인할 수 있습니다.',
  link: 'https://www.facebook.com/feconf.kr/',
}, {
  name: 'youtube',
  title: 'FEConf 유튜브',
  desc: 'FEConf의 유튜브 채널입니다. 지난 행사 영상들을 시청할 수 있습니다.',
  link: 'https://www.youtube.com/channel/UCWEzfYIpFBIG5jh6laXC6hA',
}, {
  name: 'email',
  title: 'E-Mail',
  desc: '궁금한 점이 있다면 이메일을 보내주세요. 상황에 따라 시간이 소요될 수 있습니다.',
  link: 'mailto:feconf@googlegroups.com',
}];

const PlatformList: React.FC<PlatformListProps> = () => {
  const platformRef = useRef();
  const { visible: platformVisible } = useIntersection(platformRef, { threshold: .5, bottom: false });
  return (
    <motion.div
      className={css.PlatformList}
      ref={platformRef}
      initial="hidden"
      animate={platformVisible ? 'visible' : 'hidden'}
      variants={noticeMotions.titleContainer}
    >
      {platformData.map((platform, i) =>
        <motion.div key={i} className={css.platform} variants={noticeMotions.platform}>
          <div className={css.icon}>
            <img src={`/images/icons/${platform.name}@2x.png`} alt={platform.name}/>
          </div>
          <h3>{platform.title}</h3>
          <div className={css.mobileTitleWrap}>
            <div className={css.icon}>
              <img src={`/images/icons/${platform.name}@2x.png`} alt={platform.name}/>
            </div>
            <h3>{platform.title}</h3>
          </div>
          <p>
            {platform.desc}
          </p>
          <SafeLink className={css.mobile} href={platform.link}>
            <ArrowDownIcon/>
          </SafeLink>
          <SafeLink className={css.pc} href={platform.link}>
            <img src="/images/icons/arrow-right@2x.png" alt="link"/>
          </SafeLink>
        </motion.div>
      )}
    </motion.div>
  );
}

export default PlatformList;
