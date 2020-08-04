import React from 'react';
import css from './HomePage.module.scss';
import Header from "@components/Header/Header";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={css.HomePage}>
      <Header/>
    </div>
  );
}

export default HomePage;
