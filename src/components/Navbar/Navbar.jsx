import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="relative py-5 flex justify-between items-center">
        <div>
          <Logo />
        </div>

        <div>
          <Link
            to="/wallet"
            className="bg-[#4F46E5] text-white p-3 text-[14px] px-5 rounded-[6px] font-poppins font-semibold"
          >
            Claim Airdrop
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
