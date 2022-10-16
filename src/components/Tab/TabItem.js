import React from "react";
import { Link } from "react-router-dom";
import { engToBdNum } from "../../lib/banglaNumberConvert";

const TabItem = ({ data, index }) => {
  const { headline, subheadline, id } = data;

  return (
    <li>
      <Link to={`/${id}`}>
        <div>
          <span>{engToBdNum(index)}</span>
          <p>
            {subheadline && <span>{subheadline}</span>} {headline}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default TabItem;
