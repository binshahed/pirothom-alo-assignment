import React from "react";
import { Link } from "react-router-dom";
import adImage from "../../assets/image/ad-1.jpg";

const FirstAd = () => {
  return (
    <div className="add-1-container">
      <h2>বিজ্ঞাপন</h2>
      <Link to="/">
        <img src={adImage} alt="" />
      </Link>
    </div>
  );
};

export default FirstAd;
