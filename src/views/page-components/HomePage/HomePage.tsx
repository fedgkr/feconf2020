import React from 'react';
import css from './HomePage.module.scss';
import Header from "@components/Header/Header";
import HeroSection from "@components/HeroSection/HeroSection";
import AboutSection from "@components/AboutSection/AboutSection";
import PreRegistrationSection from "@components/PreRegistrationSection/PreRegistrationSection";
import CallForSpeakerSection from "@components/CallForSpeakerSection/CallForSpeakerSection";
import CallForSponsorSection from "@components/CallForSponsorSection/CallForSponsorSection";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={css.HomePage}>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <PreRegistrationSection/>
      <CallForSpeakerSection/>
      <CallForSponsorSection/>
    </div>
  );
}

export default HomePage;
