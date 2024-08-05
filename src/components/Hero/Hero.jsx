import React from "react";
import heroImage from "../../assets/merge.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-gray-100 font-bold text-xl mb-3">
          The MultiChain Protocol For DApp
        </h1>

        <p className="text-gray-400 max-w-[600px]  mx-auto font-semibold font-poppins mb-8">
          Synchronizer Panel is an open protocol to communicate securely between
          Wallets and Dapps on the blockchain (Web3 Apps).
        </p>

        <div className="mb-10">
          <button className="bg-[#4F46E5] p-2 px-5 rounded-[5px] hover:bg-[#5c54e9]">
            <Link to="/wallet" className="text-gray-100 font-medium">
              Connect Wallet
            </Link>
          </button>
          <button className="bg-[#475569] p-2 px-5 rounded-[5px] ms-4 border border-gray-500 hover:bg-[#5a6b83]">
            <Link to="/wallet" className="text-gray-100 font-medium">
              Claim Reward
            </Link>
          </button>
        </div>

        <div className="mb-10">
          <img
            className=" object-contain w-[700px] mx-auto"
            src={heroImage}
            alt=""
          />
        </div>

        <div className="flex flex-col items-center space-y-10 md:space-y-0  md:flex-row  ">
          <div className=" w-[300px]  ">
            <div className="flex mb-3 w-fit mx-auto">
              <span>
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
                    fill="#FFD700" // Set the fill color to yellow
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
                    fill="#FFD700" // Set the fill color to yellow
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
                    fill="#FFD700" // Set the fill color to yellow
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
                    fill="#FFD700" // Set the fill color to yellow
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
                    fill="#FFD700" // Set the fill color to yellow
                  ></path>
                </svg>
              </span>
            </div>
            <div>
              <i className="text-gray-200 text-[13px] ">
                "The only tool that has the technology to meet our unique and
                complex needs."
              </i>
            </div>
            <div className="text-gray-300">
              fred - <span className="text-[#4A4FB7]">4.9/5</span>
            </div>
          </div>
          <div className=" w-[300px] ">
            <div className="flex mb-3 w-fit mx-auto">
              <span>
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
                    fill="#FFD700" // Set the fill color to yellow
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
                    fill="#FFD700" // Set the fill color to yellow
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
                    fill="#FFD700" // Set the fill color to yellow
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
                    fill="#FFD700" // Set the fill color to yellow
                  ></path>
                </svg>
              </span>
              <span>
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z"
                    fill="#FFD700" // Set the fill color to yellow
                  ></path>
                </svg>
              </span>
            </div>
            <div>
              <i className="text-gray-200 text-[13px] ">
                ""Fast and easy web3""
              </i>
            </div>
            <div className="text-gray-300 md:mt-6 block ">
              fred - <span className="text-[#4A4FB7]">Ben - 4.7/5</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
