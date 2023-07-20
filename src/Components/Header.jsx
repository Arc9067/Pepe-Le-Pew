import React from "react";
import HeaderBanner from "../assets/header.png";

const Header = () => {
  return (
    <div>
      <img src={HeaderBanner} alt="" className="pointer-events-none w-full" />
    </div>
  );
};

export default Header;
