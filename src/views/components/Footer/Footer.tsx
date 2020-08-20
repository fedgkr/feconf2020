import React, {useEffect, useState} from 'react';
import css from './Footer.module.scss';
import SafeLink from "@components/SafeLink/SafeLink";
import {useDispatch} from "react-redux";
import {setCocState} from "@store/slices/appSlice";
import {useAppState} from "@store/index";
import dynamic from "next/dynamic";

const CoCModal = dynamic(() => import('@components/CoCModal/CoCModal'));

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const dispatch = useDispatch();
  const store = useAppState();
  const [cocRendered, setCocRendered] = useState(false);
  function openCocModal(evt) {
    evt.preventDefault();
    dispatch(setCocState(true));
  }
  useEffect(() => {
    if (store.cocOpen) {
      setCocRendered(true);
    }
  }, [store.cocOpen]);
  return (
    <div className={css.Footer}>
      <div className={css.container}>
        <ul>
          <li>
            <SafeLink href="https://2019.feconf.kr/">
              FEConf 2019
            </SafeLink>
          </li>
          <li>
            <SafeLink
              href="https://github.com/fedgkr/feconf-notice/blob/master/CODE_OF_CONDUCT.md"
              onClick={openCocModal}
            >
              Code of conduct
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.facebook.com/groups/webfrontend">
              프론트엔드개발그룹
            </SafeLink>
          </li>
        </ul>
        <span>© FEconf. 2020 All rights reserved</span>
      </div>
      {cocRendered ? <CoCModal active={store.cocOpen}/> : null}
    </div>
  );
}

export default Footer;
