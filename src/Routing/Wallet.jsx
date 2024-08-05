import React from "react";
import Logo from "../components/Navbar/Logo";
import Cryp from "../components/Cryp/Cryp";

const Wallet = () => {
  return (
    <>
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <div className="py-10 flex justify-center">
          <Logo />
        </div>
        <div className="mb-14">
          <h1 className="text-white text-4xl text-center font-poppins mb-5 font-bold">
            Connect Wallet
          </h1>
          <p className="text-center text-white text-[13px]">
            Please connect your wallet to continue
          </p>
        </div>
        <div>
          <Cryp />
        </div>
      </div>
    </>
  );
};

export default Wallet;
