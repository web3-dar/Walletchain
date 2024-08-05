import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Progress from "./components/Progress/Progress";
import Eco from "./components/Eco/Eco";
import ConnectorApp from "./components/Connect/ConnectorApp";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <div className="w-[90%] lg:w-[70%] mx-auto pb-24  border-b-2 border-gray-600">
        <Navbar />
        <div className="mt-10">
          <Hero />
        </div>
      </div>
      <div className="">
        <Progress />
      </div>
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <Eco />
      </div>
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <ConnectorApp />
      </div>
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <Footer />
      </div>
    </>
  );
};

export default App;
