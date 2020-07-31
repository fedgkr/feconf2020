import React from 'react';
import css from './HomePage.module.scss';
import Empty from "@components/Empty/Empty";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={css.HomePage}>
      <Empty/>
    </div>
  );
}

export default HomePage;
