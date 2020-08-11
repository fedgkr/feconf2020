import React from 'react';
import css from './Footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={css.Footer}>
      <ul>
        <li><a href="">FEConf 2019</a></li>
        <li><a href="">Code of conduct</a></li>
        <li><a href="">프론트엔드개발그룹</a></li>
      </ul>
      <span>© FEconf. 2020 All rights reserved</span>
    </div>
  );
}

export default Footer;
