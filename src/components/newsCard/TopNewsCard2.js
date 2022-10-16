import React from "react";
import { Link } from "react-router-dom";
import { engToBdNum } from "../../lib/banglaNumberConvert";

const TopNewsCard2 = ({ data, index }) => {
  const { headline, id, thumb, subheadline } = data;
  return (
    <div>
      <Link to={`/${id}`}>
        <img src={thumb} alt="" width="100%" />
        <h3 className="card-title">
          <span>{engToBdNum(index) + " " + subheadline + " / "}</span>
          {headline}
        </h3>
      </Link>
    </div>
  );
};

export default TopNewsCard2;
