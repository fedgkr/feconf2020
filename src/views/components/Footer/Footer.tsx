import React from 'react';
import css from './Footer.module.scss';
import SafeLink from "@components/SafeLink/SafeLink";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={css.Footer}>
      <div className={css.container}>
        <ul>
          <li><SafeLink href="https://2019.feconf.kr/">FEConf 2019</SafeLink></li>
          <li><SafeLink href="https://github.com/fedgkr/feconf-notice/blob/master/CODE_OF_CONDUCT.md">Code of conduct</SafeLink></li>
          <li><SafeLink href="https://www.facebook.com/groups/webfrontend">프론트엔드개발그룹</SafeLink></li>
        </ul>
        <span>© FEconf. 2020 All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
