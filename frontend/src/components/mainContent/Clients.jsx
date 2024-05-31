import React from "react";

const Clients = () => {
  return (
    <>
      <div className="container1 scroll-smooth bg-white">
        <div className="wrapper1 max-w-[1200px] mx-auto h-[70vh] flex items-center justify-center flex-col gap-11">
          <div>
            <p className="tracking-wider text-[36px]">OUR CLIENTS</p>
          </div>
          <div className="ourclient flex items-center justify-between w-[70vw]">
            <img
              src="https://i.ibb.co/8K7TvzF/3.jpg"
              alt=""
              className="w-[100px]"
            />
            <img src="./src/assets/4.jpg" alt="" className="w-[100px]" />
            <img src="./src/assets/5.jpg" alt="" className="w-[100px]" />
            <img src="./src/assets/6.jpg" alt="" className="w-[100px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
