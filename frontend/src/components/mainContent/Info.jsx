import React from "react";

const Info = () => {
  return (
    <>
      <div className="container1 scroll-smooth h-[70vh] flex items-center justify-center  bg-white">
        <div className="wrapper1 max-w-[1200px] mx-auto flex items-center justify-between gap-9 w-[100vw]">
          <div className="services flex items-center justify-center flex-col gap-6">
            <p className="text-[36px] tracking-wide">SERVICES</p>
            <p className="w-[350px] text-[16px] leading-relaxed font-light">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="text-[#0c3c60] px-[40px] py-[10px] border border-solid border-black text-[16px] font-medium transition ease duration-300 hover:bg-[#0c3c60] hover:text-white">
              More Info
            </button>
          </div>
          <div className="projects flex items-center justify-center flex-col gap-6">
            <p className="text-[36px] tracking-wide">PROJECTS</p>
            <p className="w-[350px] text-[16px] leading-relaxed font-light">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="text-[#0c3c60] px-[40px] py-[10px] border border-solid border-black text-[16px] font-medium transition ease duration-300 hover:bg-[#0c3c60] hover:text-white">
              More Info
            </button>
          </div>
          <div className="clients flex items-center justify-center flex-col gap-6">
            <p className="text-[36px] tracking-wide">CLIENTS</p>
            <p className="w-[350px] text-[16px] leading-relaxed font-light">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="text-[#0c3c60] px-[40px] py-[10px] border border-solid border-black text-[16px] font-medium transition ease duration-300 hover:bg-[#0c3c60] hover:text-white">
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
