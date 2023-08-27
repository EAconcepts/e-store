import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Outlet } from "react-router-dom";
import Just4uSlide from "./Just4uSlide";

const Home = () => {
  const settings = {
    // dots: true,
    // infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    wipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div>
      <div className="h-screen w-full">
        {/* <Navbar /> */}
        <section className="h-[95%] w-full flex flex-col">
          <Swiper
            className=" w-full h-full"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="bg-hero-1  h-full w-full bg-cover flex flex-col justify-end gap-[40%] text-3xl">
                <div className="px-2 font-semibold">
                  <h2>LUXURY FASHION</h2>
                  <h2>& ACCESSORIES</h2>
                </div>
                <div className="flex flex-col items-center mb-10 text-white  ">
                  <button className=" bg-slate-700 bg-opacity-90 w-fit text-lg px-3 rounded-md">
                    EXPLORE COLLECTIONS
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-hero-2  h-full w-full bg-cover flex flex-col justify-end gap-[40%] text-3xl">
                <div className="px-2 font-semibold">
                  <h2>LUXURY FASHION</h2>
                  <h2>& ACCESSORIES</h2>
                </div>
                <div className="flex flex-col items-center mb-10 text-white  ">
                  <button className=" bg-slate-700 bg-opacity-90 w-fit text-lg px-3 rounded-md">
                    EXPLORE COLLECTIONS
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-hero-3  h-full w-full bg-cover flex flex-col justify-end gap-[40%] text-3xl">
                <div className="px-2 font-semibold">
                  <h2>LUXURY FASHION</h2>
                  <h2>& ACCESSORIES</h2>
                </div>
                <div className="flex flex-col items-center mb-10 text-white  ">
                  <button className=" bg-slate-700 bg-opacity-90 w-fit text-lg px-3 rounded-md">
                    EXPLORE COLLECTIONS
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
      <section className=" flex flex-col px-1 items-center  ">
        <h2 className=" uppercase text-center font-medium text-2xl tracking-wider mb-2">New Arrival </h2>
        <div className="bg-slate-500 w-32 border-b flex flex-row justify-center"></div>
        <div className="flex flex-row w-full justify-around px-5 mt-4 text-slate-400 ">
          <NavLink
            to="/all"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-slate-800 font-medium" : ""
            }
          >
            All
          </NavLink>
          <NavLink
            to="/apparel"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-slate-800 font-medium" : ""
            }
          >
            Apparel
          </NavLink>
          <NavLink
            to="/dress"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-slate-800 font-medium" : ""
            }
          >
            Dress
          </NavLink>
          <NavLink
            to="/tshirt"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-slate-800 font-medium" : ""
            }
          >
            Tshirt
          </NavLink>
          <NavLink
            to="/bag"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-slate-800 font-medium" : ""
            }
          >
            Bag
          </NavLink>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </section>
      <section>
        <div className="flex flex-row justify-around mt-16">
          <h2 className="uppercase ">Prada</h2>
          <h2 className="uppercase">Blueberry</h2>
          <h2 className="uppercase">Boss</h2>
        </div>
        <div className="flex flex-row justify-around">
          <h2 className="uppercase ">Cartier</h2>
          <h2 className="uppercase">Gucci</h2>
          <h2 className="uppercase">Tiffany & Co.</h2>
        </div>
      </section>
      <section className="w-full flex flex-col items-center">
        <h2 className="font-medium text-lg tracking-wider text-center mt-16">
          {" "}
          COLLECTIONS
        </h2>
        <img
          src="https://guardian.ng/wp-content/uploads/2018/03/Ere-Dappa-with-some-of-her-models.-Photo_-Vogue.jpg"
          alt="collection-image"
          className="w-full h-34"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHoOOkVOXTOzwg_-Ovd6ePIx7kmh_XI_MCw&usqp=CAU"
          alt="autumn collection"
          className="w-[85%] h-34 mt-8 object-cover"
        />

        <video width="320" height="240" controls autoPlay>
          <source src="https://youtu.be/D671Yge7SAA" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col items-center w-full">
          <Just4uSlide />
        </div>
        <div className="w-full flex flex-col mt-5">
          <div className="w-full flex flex-row justify-around text-sm">
            <span className="bg-slate-100">#2021</span>
            <span className="bg-slate-100">#spring</span>
            <span className="bg-slate-100">#collection</span>
            <span className="bg-slate-100">#fall</span>
          </div>
          <div className=" w-full flex flex-row justify-around text-sm">
            <span className="bg-slate-100">#dress</span>
            <span className="bg-slate-100">#autumncollection</span>
            <span className="bg-slate-100">#openfashion</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
