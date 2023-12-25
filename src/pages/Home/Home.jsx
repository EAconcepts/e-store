import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import { NavLink, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { Outlet } from "react-router-dom";
import Just4uSlide from "../../components/Just4uSlide";
import { divider } from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faPencil,
  faSeedling,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "./components/Hero";
import underline from "../../assets/underline.svg";
import NewArrival from "./components/NewArrival";

const Home = () => {
  const instagram = [
    {
      username: "@mia",
      url: "https://instagram.com",
      image:
        "https://images.saymedia-content.com/.image/t_share/MTk4MDQzMTI5NzY3NTM1ODA2/short-captions-for-profile-pictures.png",
    },
    {
      username: "@__jihyn",
      url: "https://instagram.com",
      image:
        "https://wallpapers.com/images/hd/instagram-profile-pictures-13wxylqo73wc11je.jpg",
    },
    {
      username: "@mia",
      url: "https://instagram.com",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      username: "@__jihyn",
      url: "https://instagram.com",
      image:
        "https://i.pinimg.com/originals/5e/b6/6c/5eb66c4e498377df2264caf93d923b77.jpg",
    },
  ];

  return (
    <div className="">
      {/* {Hero slide} */}
      <Hero />
      {/* {New Arrival} */}
      <NewArrival/>
      {divider}
      {/* {Brands} */}
      <section className="my-10">
        <div className="flex flex-row justify-around font-bold">
          <h2 className="uppercase ">Prada</h2>
          <h2 className="uppercase">Blueberry</h2>
          <h2 className="uppercase">Boss</h2>
        </div>
        <div className="flex flex-row justify-around font-medium">
          <h2 className="italic">Cartier</h2>
          <h2 className="uppercase tracking-widest">Gucci</h2>
          <h2 className="uppercase">Tiffany & Co.</h2>
        </div>
      </section>
      {/* {divider} */}
      <img src={underline} alt="divider" className=" m-auto"/>
      <section className="w-full flex flex-col items-center">
        <h2 className="font-medium text-xl tracking-widest text-center mt-16">
          {" "}
          COLLECTIONS
        </h2>
        <img
          src="https://guardian.ng/wp-content/uploads/2018/03/Ere-Dappa-with-some-of-her-models.-Photo_-Vogue.jpg"
          alt="collection-image"
          className="w-full h-34 mt-3 lg:px-[32px]"
        />
        <Link to="#" className="w-full flex flex-col items-center">
          <img
            src="https://img.freepik.com/premium-photo/plate-with-inscription-new-collection-boutique-shelves-clothing-racks-with-colorful-male-female-clothes-hangers-concept-luxury-shop-shopping-mall-store-sale-retail-store-outlet_128384-686.jpg"
            alt="autumn collection"
            className="w-[75%] h-60 mt-8 object-cover object-top"
          />
        </Link>
        <video
          className="mt-8 w-full lg:px-[32px] lg:h-[500px] lg:w-full"
          width="320"
          height="240" 
          controls
          autoPlay
        >
          <source
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/V1xq1AADx/videoblocks-50z_01_wom_wesh_00099760_v1-0011_hnpsxz4py__4a64f141c367039f46481660b4c15c6b__P360.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          id="lazy-component-placeholder"
          className="flex flex-col items-center w-full mt-10 px-2"
        >
          <h1
            animate={{ fontSize: 30 }}
            className="px-2 text-center tracking-widest text-xl font-semibold"
          >
            JUST FOR YOU
          </h1>
          {divider}
          <Just4uSlide />
        </div>
        <div className="w-full flex flex-col mt-8">
          <h1 className="tracking-widest text-xl text-center">@TRENDING</h1>
          <div className="w-full flex flex-row justify-around text-sm mt-5">
            <Link to="#" className="bg-slate-100">
              #2021
            </Link>
            <Link to="#" className="bg-slate-100">
              #spring
            </Link>
            <Link to="#" className="bg-slate-100">
              #collection
            </Link>
            <Link to="#" className="bg-slate-100">
              #fall
            </Link>
          </div>
          <div className=" w-full flex flex-row justify-around text-sm mt-3">
            <Link to="#" className="bg-slate-100">
              #dress
            </Link>
            <Link to="#" className="bg-slate-100">
              #autumnCollection
            </Link>
            <Link to="#" className="bg-slate-100">
              #openFashion
            </Link>
          </div>
        </div>
        <div className="w-full bg-[#f7f7f7] flex flex-col items-center mt-12 py-3 px-4">
          <div className="font-bold text-2xl">
            <h1>Open</h1>
            <h1 className="-ml-2 -mt-1">Fashion</h1>
          </div>
          <p className="mb-2 text-center">
            Making a luxurious lifestyle accessible for generous group of women
            is our daily drive.
          </p>
          {divider}
          <div className="flex flex-col mt-3 pb-8">
            <div className="flex flex-row text-center justify-between gap-5">
              <div className="flex flex-col">
                <FontAwesomeIcon icon={faTruckFast} className="text-3xl" />
                <span>Fast shipping Free on orders over $25</span>
              </div>
              <div className="flex flex-col">
                <FontAwesomeIcon icon={faSeedling} className="text-3xl" />
                <span className="text-center">
                  Sustainable process from start to finish
                </span>
              </div>
            </div>
            <div className="flex flex-row mt-4 justify-between gap-5">
              <div className="flex flex-col">
                <FontAwesomeIcon icon={faPencil} className="text-3xl" />
                <span className="text-center">
                  Unique designs and high-quality materials.
                </span>
              </div>
              <div className="flex flex-col">
                <FontAwesomeIcon icon={faBoltLightning} className="text-3xl" />
                <span className="text-center">
                  Fast shipping. Free on orders over $25.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Follow us */}
        <div className="w-full flex flex-col items-center mt-10 ">
          <h1 className="uppercase text-xl font-semibold tracking-widest">
            Follow us
          </h1>
          <i className="fab fa-instagram text-3xl mt-2"></i>
          <div className="w-full lg:place-items-center grid grid-cols-2 place-content-center px-2 gap-3 lg:gap-12">
            {instagram &&
              instagram.map((insta, index) => (
                <a
                  key={index}
                  href={insta.url}
                  target="_blank"
                  className="relative w-full lg:w-[300px] h-56 flex flex-col justify-end mt-2"
                >
                  <img
                    src={insta.image}
                    alt={`${insta.image} image`}
                    className="absolute lg:w-full h-full object-cover grayscale -z-10"
                  />
                  <p className="py-2 px-2 bg-gradient-to-t from-slate-900 text-white">
                    {insta.username}
                  </p>
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
