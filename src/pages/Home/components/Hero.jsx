import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    { bg: "bg-hero-1" },
    { bg: "bg-hero-2" },
    { bg: "bg-hero-3" },
  ];
  return (
    <div className="h-screen w-full">
      <section className="h-[95%] w-full flex flex-col">
        <Swiper
          className=" w-full h-full"
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`${slide.bg} bg-cover md:bg-top h-full w-full bg-center flex flex-col justify-end gap-[40%] text-[38.656px]`}
              >
                <div className="w-full -mb-4 px-6 font-semibold italic flex flex-col -space-y-2 text-[#333] leading-[43.488px] tracking-[1.208px] uppercase">
                  <h2>LUXURY </h2>
                  <h2 className="ml-6">FASHION</h2>
                  <h2>& ACCESSORIES</h2>
                </div>
                <div className="flex flex-col items-center mb-10 text-[#FCFCFC]  ">
                  <Link
                    to="/category/all"
                    className=" bg-[rgba(0,0,0,0.40)] text-[16px] font-[400] py-[8px] px-[30px] opacity-75 rounded-[30px] backdrop:blur-[2px] leading-[24px] uppercase"
                  >
                    EXPLORE COLLECTIONS
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;
