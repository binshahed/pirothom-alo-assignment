import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.svg";

const NavBer = () => {
  return (
    <div className="nav">
      <p>
        <Link to="/">
        <img src={logo} alt="prothom alo logo" />
        </Link>
      </p>
    </div>
  );
};

export default NavBer;
