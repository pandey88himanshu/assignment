import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Testimonial = () => {
  const data = [
    {
      message:
        "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”",
      post: "Project Manager",
      name: "Dora Bridges",
    },
    {
      message:
        "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”",
      post: "Marketing Director",
      name: "Sima Patel",
    },
    {
      message:
        "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”",
      post: "Operations Manager",
      name: "Brad Stevens",
    },
  ];
  return (
    <>
      <div className="container1 h-[60vh] flex items-center justify-center gap-8 bg-white">
        <div className="wrapper1  max-w-[1200px] mx-auto">
          <div className="h-[40vh] flex items-center justify-center flex-col">
            <p className="text-[36px] tracking-wide h-[10vh]">TESTIMONIALS</p>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {data.map((d) => {
                return (
                  <SwiperSlide className="flex items-center justify-center flex-col gap-5">
                    <div className="w-[40vw] font-light text-[20px]">
                      {d.message}
                    </div>
                    <div>
                      <div className="text-[#0c3c60] font-medium">{d.post}</div>
                      <div className="font-light text-[14px]">{d.name}</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
