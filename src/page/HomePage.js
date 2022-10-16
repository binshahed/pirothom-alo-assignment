import React from "react";
import Tab from "../components/Tab/Tab";

import SecondAd from "../components/Ad/SecondAd";
import MainNewsSection from "../components/MainNewsSection";

const HomePage = () => {
  return (
    <div>
      <div className="home-main-layout">
        <Tab />
        <MainNewsSection />
      </div>
      <SecondAd />
    </div>
  );
};

export default HomePage;
