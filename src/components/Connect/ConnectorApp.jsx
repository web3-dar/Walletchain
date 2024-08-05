import React from "react";
import { Link } from "react-router-dom";

const ConnectorApp = () => {
  return (
    <>
      <div className="mt-20 mb-10 bg-[#33313110] border-t py-24 border-gray-700 border-b">
        <p className="text-center text-white text-2xl font-bold font-poppins">
          We make it easy to plug into Dapp.
        </p>
        <div className="text-center mt-10">
          <Link
            to="/wallet"
            className="bg-[#4F46E5] p-4 px-5 rounded-[5px] hover:bg-[#5c54e9] text-white font-semibold font-poppins"
          >
            Connect Wallet
          </Link>
        </div>
      </div>
    </>
  );
};

export default ConnectorApp;
