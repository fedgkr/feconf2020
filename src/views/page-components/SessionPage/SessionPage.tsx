import React, {useEffect, useRef} from 'react';
import css from './SessionPage.module.scss';
import Header from "@components/Header/Header";
import LineBackground from "@svgs/LineBackground/LineBackground";
import HeroSection from "@components/HeroSection/HeroSection";
import AboutSection from "@components/AboutSection/AboutSection";
import PreRegistrationSection from "@components/PreRegistrationSection/PreRegistrationSection";
import NoticeSection from "@components/NoticeSection/NoticeSection";
import RegisterSection from "@components/RegisterSection/RegisterSection";
import Footer from "@components/Footer/Footer";
import SpeakerListSection from "@components/SpeakerListSection/SpeakerListSection";
import SessionListSection from "@components/SessionListSection/SessionListSection";
import SponsorSection from "@components/SponsorSection/SponsorSection";
import {useFirebase} from "@utils/hooks/use-firebase";
import {useSupportState} from "@store/index";
import {useDynamicRender} from "@utils/hooks/use-dynamic-render";
import {useSupportModal} from "../HomePage/HomePage";
import SupportFormModal from "@components/SupportFormModal/SupportFormModal";

interface SessionPageProps {}

const SessionPage: React.FC<SessionPageProps> = () => {
  const { supportFormOpen } = useSupportState();
  const renderState = useDynamicRender(supportFormOpen);
  useFirebase();
  useSupportModal();
  return (
    <div className={css.SessionPage}>
      <Header />
      <div className={css.sections}>
        <LineBackground />
        <HeroSection />
        <AboutSection />
        <SpeakerListSection/>
        <SessionListSection/>
        <SponsorSection/>
        <PreRegistrationSection />
        <NoticeSection />
        <RegisterSection />
      </div>
      <Footer />
      {renderState ? <SupportFormModal active={supportFormOpen} /> : null}
    </div>
  );
}

export default SessionPage;
