import React from "react";
import { Link } from "react-router-dom";
import { engToBdNum } from "../../lib/banglaNumberConvert";

const TopNewsCard3 = ({ data, index }) => {
  const { headline, id, thumb, subheadline } = data;

  return (
    <li>
      <Link to={`/${id}`}>
        <div className="right-news-card">
          <div>
            <h3 className="card-title">
              <span>{engToBdNum(index) + " " + subheadline + " / "}</span>
              {headline}
            </h3>
            <p>৫ ঘণ্টা আগে </p>
          </div>
          <img src={thumb} alt="" width="100%" />
        </div>
      </Link>
    </li>
  );
};

export default TopNewsCard3;
