import React, { useState } from "react";
import TabItem from "./TabItem";
import dataList from "../../sample-data1.json";
import FirstAd from "../Ad/FirstAd";

const Tab = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className="tab-container">
      <div className="tabs-nav-container">
        <p
          className={`tabs-nav-item ${getActiveClass(
            1,
            "active-tabs-nav-item"
          )}`}
          onClick={() => toggleTab(1)}
        >
          সর্বশেষ
        </p>
        <p
          className={`tabs-nav-item ${getActiveClass(
            2,
            "active-tabs-nav-item"
          )}`}
          onClick={() => toggleTab(2)}
        >
          পঠিত
        </p>
        <p
          className={`tabs-nav-item ${getActiveClass(
            3,
            "active-tabs-nav-item"
          )}`}
          onClick={() => toggleTab(3)}
        >
          আলোচিত
        </p>
      </div>

      <div>
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <ul className="tab-card">
            {dataList?.latest?.items
              .sort((a, b) => a.sort - b.sort)
              .map((data, index) => (
                <TabItem key={data.id} data={data} index={index + 1} />
              ))}
          </ul>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <ul className="tab-card">
            {dataList?.mostread?.items
              .sort((a, b) => a.sort - b.sort)
              .map((data, index) => (
                <TabItem key={data.id} data={data} index={index + 1} />
              ))}
          </ul>
        </div>
        <div className={`content ${getActiveClass(3, "active-content")}`}>
          <ul className="tab-card">
            {dataList?.discussed?.items
              .sort((a, b) => a.sort - b.sort)
              .map((data, index) => (
                <TabItem key={data.id} data={data} index={index + 1} />
              ))}
          </ul>
        </div>
      </div>

      <div className="add-mobile">
        <FirstAd />
      </div>
    </div>
  );
};

export default Tab;
