import React from 'react';
import css from './SponsorGradeContainer.module.scss';
import sponsorMotions from "@motions/sponsor.motions";
import SafeLink from "@components/SafeLink/SafeLink";
import {motion} from "framer-motion";

interface SponsorGradeContainerProps {
  title: string;
  sponsorList: any;
}

const SponsorGradeContainer: React.FC<SponsorGradeContainerProps> = React.memo(({ title, sponsorList }) => {
  return (
    <motion.div className={css.SponsorGradeContainer} variants={sponsorMotions.item}>
      <h3>{ title }</h3>
      <div className={css.list}>
        { sponsorList.map((sponsor, idx) => {
          const list = Array.isArray(sponsor) ? sponsor : [sponsor];
          return (
            <div className={css.row} key={idx}>
              {list.map(s => (
                <SafeLink key={s.name} href={s.link}>
                  <img src={`/images/sponsors/${s.image}`} alt={s.name}/>
                </SafeLink>
              ))}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
});

export default SponsorGradeContainer;
