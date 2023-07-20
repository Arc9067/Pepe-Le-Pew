import React from "react";
import HeaderBanner from "../assets/header.png";

const Header = () => {
  return (
    <div>
      <img src={HeaderBanner} alt="" className="pointer-events-none" />
    </div>
  );
};

export default Header;
