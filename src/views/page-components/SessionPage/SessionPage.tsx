import React from 'react';
import css from './SessionPage.module.scss';
import Header from "@components/Header/Header";
import LineBackground from "@svgs/LineBackground/LineBackground";
import HeroSection from "@components/HeroSection/HeroSection";
import AboutSection from "@components/AboutSection/AboutSection";
import PreRegistrationSection from "@components/PreRegistrationSection/PreRegistrationSection";
import CallForSpeakerSection from "@components/CallForSpeakerSection/CallForSpeakerSection";
import CallForSponsorSection from "@components/CallForSponsorSection/CallForSponsorSection";
import NoticeSection from "@components/NoticeSection/NoticeSection";
import RegisterSection from "@components/RegisterSection/RegisterSection";
import Footer from "@components/Footer/Footer";

interface SessionPageProps {}

const SessionPage: React.FC<SessionPageProps> = () => {
  return (
    <div className={css.SessionPage}>
      <Header />
      <div className={css.sections}>
        <LineBackground />
        <HeroSection />
        <AboutSection />
        <PreRegistrationSection />
        <NoticeSection />
        <RegisterSection />
      </div>
      <Footer />
    </div>
  );
}

export default SessionPage;
