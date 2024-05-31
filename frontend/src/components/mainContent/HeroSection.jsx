import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="container1 scroll-smooth">
        <div className="wrapper1 bg-[url('1.jpg')] w-[100vw] h-[100vh] bg-cover bg-center">
          <div className="container1 flex items-end justify-center w-screen h-screen ">
            <div className="slide-up wrapper1 w-[55vw] h-[40vh] mx-auto  bg-white text-black flex items-center justify-center flex-col gap-9">
              <div className="flex items-center justify-center flex-col gap-4">
                <p className="text-[26px]">Developing Innovative Strategies</p>
                <p className="text-[60px] tracking-wider">ACHIEVING GROWTH</p>
              </div>
              <button className="text-[#0c3c60] px-[50px] py-[20px] border border-solid border-black text-[16px] font-medium transition ease duration-300 hover:bg-[#0c3c60] hover:text-white">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
