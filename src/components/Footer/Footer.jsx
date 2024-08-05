import React from "react";
import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <>
      <div className="mb-7">
        <Logo />
        <p className="text-[.8em] text-gray-600 mt-[20px] font-poppins">
          All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
