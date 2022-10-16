import React from "react";
import FirstAd from "./Ad/FirstAd";
import TopNewsCard from "./newsCard/TopNewsCard";
import TopNewsCard2 from "./newsCard/TopNewsCard2";
import TopNewsCard3 from "./newsCard/TopNewsCard3";
import dataList from "../sample-data1.json";

const MainNewsSection = () => {
  const shortedData = dataList?.selected?.items.sort((a, b) => a.sort - b.sort);
  return (
    <div className="news-container">
      {/* head news container  */}
      <div className="news-heading">
        <h2 className="elected-heading">নির্বাচিত</h2>
        <TopNewsCard data={shortedData[0]} index="1" />
        <div className="sub-news-heading-container">
          {shortedData.slice(1, 3).map((data, index) => (
            <TopNewsCard2 key={data.id} data={data} index={index + 2} />
          ))}
        </div>
      </div>
      {/* right section */}
      <div className="right-section">
        {/* ad section  */}
        <div className="desktop-add">
          <FirstAd />
        </div>
        {/* news card after ad  */}
        <ul>
          {shortedData.map(
            (data, index) =>
              index > 2 && (
                <TopNewsCard3 key={data.id} data={data} index={index + 1} />
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainNewsSection;
