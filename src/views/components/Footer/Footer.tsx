import React from "react";
import css from "./Footer.module.scss";
import SafeLink from "@components/SafeLink/SafeLink";
import { useDispatch } from "react-redux";
import { setCocState } from "@store/slices/appSlice";
import { useAppState } from "@store/index";
import dynamic from "next/dynamic";
import { useDynamicRender } from "@utils/hooks/use-dynamic-render";

const CoCModal = dynamic(() => import("@components/CoCModal/CoCModal"));

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const dispatch = useDispatch();
  const store = useAppState();
  const renderState = useDynamicRender(store.cocOpen);
  function openCocModal(evt) {
    evt.preventDefault();
    dispatch(setCocState(true));
  }
  return (
    <div className={css.Footer}>
      <div className={css.container}>
        <ul>
          <li>
            <SafeLink href="https://2019.feconf.kr/">FEConf2019</SafeLink>
          </li>
          <li>
            <SafeLink
              href="https://github.com/fedgkr/feconf-notice/blob/master/CODE_OF_CONDUCT.md"
              onClick={openCocModal}
            >
              Code of Conduct
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.facebook.com/groups/webfrontend">
              프론트엔드개발그룹
            </SafeLink>
          </li>
        </ul>
        <span>© FEConf2020. All rights reserved.</span>
      </div>
      {renderState ? <CoCModal active={store.cocOpen} /> : null}
    </div>
  );
};

export default Footer;
