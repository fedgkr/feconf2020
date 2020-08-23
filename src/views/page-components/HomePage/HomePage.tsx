import React, {useEffect, useState} from 'react';
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
import {useAppState, useSupportState} from "@store/index";
import dynamic from "next/dynamic";
import {useDynamicRender} from "@utils/hooks/use-dynamic-render";

const SupportFormModal = dynamic(() => import("@components/SupportFormModal/SupportFormModal"));

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { supportFormOpen } = useSupportState();
  const renderState = useDynamicRender(supportFormOpen);
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
      { renderState ? <SupportFormModal active={supportFormOpen}/> : null }
    </div>
  );
}

export default HomePage;
