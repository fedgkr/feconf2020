import React from 'react';
import css from './HomePage.module.scss';
import Header from "@components/Header/Header";
import HeroSection from "@components/HeroSection/HeroSection";
import AboutSection from "@components/AboutSection/AboutSection";
import PreRegistrationSection from "@components/PreRegistrationSection/PreRegistrationSection";
import CallForSpeakerSection from "@components/CallForSpeakerSection/CallForSpeakerSection";
import CallForSponsorSection from "@components/CallForSponsorSection/CallForSponsorSection";
import NoticeSection from "@components/NoticeSection/NoticeSection";
import RegisterSection from "@components/RegisterSection/RegisterSection";
import Footer from "@components/Footer/Footer";
import LineBackground from '@svgs/LineBackground/LineBackground';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={css.HomePage}>
      <Header/>
      <div className={css.sections}>
        <HeroSection/>
        <AboutSection/>
        <PreRegistrationSection/>
        <CallForSpeakerSection/>
        <CallForSponsorSection/>
        <NoticeSection/>
        <RegisterSection/>
        <LineBackground />
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
