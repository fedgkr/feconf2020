import React from 'react';
import css from './Footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={css.Footer}>
      <span>© FEconf. 2020 All rights reserved</span>
    </div>
  );
}

export default Footer;
