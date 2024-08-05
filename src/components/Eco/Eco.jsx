import React from "react";
import Ping from "../Ping";
import matrix1 from "../../assets/matrix1.png";
import matrix2 from "../../assets/matrix2.svg";
import matrix3 from "../../assets/matrix3.png";

const Eco = () => {
  return (
    <>
      <div>
        <div className="py-20 mb-10 relative">
          <h1 className="text-center text-4xl lg:text-6xl text-white font-extrabold max-w-[600px] mx-auto ">
            An ecosystem of integrations
          </h1>
        </div>
        <div>
          <Ping />
        </div>
        <div className="mb-20 hidden md:block">
          <span className="w-[1px] h-[30px] bg-gray-600 block transform translate-x-[469px] translate-y-[100px] "></span>
          <span className="w-[350px] h-[1px] block bg-gray-600 transform translate-x-[120px] translate-y-[100px]"></span>
          <span className="w-[1px] h-[20px] bg-gray-600 block transform translate-x-[429px] translate-y-[100px] "></span>
          <span className="w-[1px] h-[20px] bg-gray-600 block transform translate-x-[259px] translate-y-[80px] "></span>
          <span className="w-[1px] h-[20px] bg-gray-600 block transform translate-x-[120px] translate-y-[60px] "></span>
        </div>

        <div className="flex flex-col items-center md:items-start md:flex-row justify-between  md:w-[530px] mt-32">
          <div className="">
            <div className="w-fit mb-5 md:mb-0 p-10 bg-gray-700 ">
              <img
                src={matrix1}
                className="w-[200px] h-[200px] md:w-[80px] md:h-[80px] rounded-full object-contain  bg-[#0c1322]"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="w-fit mb-5 md:mb-0 p-10 bg-gray-700">
              <img
                src={matrix2}
                className="w-[200px] h-[200px] md:w-[80px] md:h-[80px] rounded-full object-contain  bg-[#0c1322]"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="w-fit mb-5 md:mb-0 p-10 bg-gray-700">
              <img
                src={matrix3}
                className="w-[200px] h-[200px] md:w-[80px] md:h-[80px] rounded-full object-contain  bg-[#0c1322]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eco;
