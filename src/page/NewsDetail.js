import React from "react";
import { useParams } from "react-router-dom";
import dataList from "../sample-data1";

const NewsDetail = () => {
  const { id } = useParams();
  const newArr = Object.keys(dataList).map((key, index) => {
    const subTheme = dataList[key];
    return subTheme.items;
  });
  const result = newArr
    .reduce((r, e) => (r.push(...e), r), [])
    .find((e) => e.id == id);
  const { headline, thumb, descriptions, subheadline } = result;

  return (
    <div className="news-detail-container">
      <div className="news-detail-item">
        <div className="news-top-section">
          {subheadline && <p className="sub-head-line">{subheadline}</p>}
          <h1>{headline}</h1>
        </div>
        <img src={result["cover-photo"] || thumb} alt="" width="100%" />
        <div
          className="news-description"
          dangerouslySetInnerHTML={{ __html: descriptions }}
        />
      </div>
    </div>
  );
};

export default NewsDetail;
