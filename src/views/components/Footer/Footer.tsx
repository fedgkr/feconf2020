import React from 'react';
import css from './Footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={css.Footer}>
      <ul>
        <li><a rel="noopener noreferrer" target="_blank" href="https://2019.feconf.kr/">FEConf 2019</a></li>
        <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/fedgkr/feconf-notice/blob/master/CODE_OF_CONDUCT.md">Code of conduct</a></li>
        <li><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/groups/webfrontend">프론트엔드개발그룹</a></li>
      </ul>
      <span>© FEconf. 2020 All rights reserved</span>
    </div>
  );
}

export default Footer;
