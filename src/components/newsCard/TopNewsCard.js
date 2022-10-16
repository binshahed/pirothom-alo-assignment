import React from "react";
import { Link } from "react-router-dom";
import { engToBdNum } from "../../lib/banglaNumberConvert";

const TopNewsCard = ({ data, index }) => {
  const { headline, id, thumb, subheadline } = data;
  console.log(data);
  return (
    <div>
      <Link to={`/${id}`}>
        <div className="main-heading-container">
          <img src={thumb} alt="" width="100%" />
          <h3 className=" card-heading">
            <span>{engToBdNum(index) + " " + subheadline + "/ "}</span>
            {headline}
          </h3>
          {/* <h1 className="card-heading">{headline}</h1> */}
        </div>
      </Link>
    </div>
  );
};

export default TopNewsCard;
