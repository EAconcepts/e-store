import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import useBlogStore from "./zustand/Store";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const { productId } = useParams();
  const { apparelArray } = useBlogStore();
  const [activeSize, setActiveSize] = useState('s')
  const [activeColor, setActiveColor] = useState('blue')
  const product = apparelArray.find((prod) => prod.id === productId);
  return (
    <div className="w-full mt-6 ">
      <div className="w-full flex flex-col px-2">
        <Swiper
          className=" w-full h-full"
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {product &&
            product.image.map((img, index) => (
              <SwiperSlide key={index}>
                <a href={img} target='_blank'>
                  <img
                    src={img}
                    alt={`${product.title} image`}
                    className="w-full h-72 object-cover object-top"
                  />
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="flex flex-col gap-y-1 capitalize">
        <h2 className="font-medium uppercase">{product.title}</h2>
        <p>{product.desc}</p>
        <p className="text-price-brown">${product.price}</p>
        <div className="w-full flex flex-row gap-x-8 items-center mt-2 ">
          <div className="flex flex-row gap-x-2 items-center ">
            <span>Color</span>

            <button
              onClick={() => {
                setActiveColor("blue");
              }}
              className={`p-[2px] rounded-full ${
                activeColor === "blue" && "border border-price-brown"
              }`}
            >
              <div className={`bg-[#171752e5] rounded-full h-5 w-5`}></div>
            </button>
            <button
              onClick={() => {
                setActiveColor("red");
              }}
              className={`p-[2px] rounded-full ${
                activeColor === "red" && "border border-price-brown"
              }`}
            >
              <div className={`bg-[#ff00007c] rounded-full h-5 w-5`}></div>
            </button>
            <button
              onClick={() => {
                setActiveColor("yellow");
              }}
              className={`p-[2px] rounded-full ${
                activeColor === "yellow" && "border border-price-brown"
              }`}
            >
              <div className={`bg-[#d6d62280] rounded-full h-5 w-5`}></div>
            </button>
          </div>
          <div className="flex flex-row gap-x-2 items-center ">
            <span>Size</span>
            <button
              onClick={() => {
                setActiveSize("s");
              }}
              className={`${
                activeSize === "s" ? "bg-slate-900 text-white" : "border"
              }  rounded-full h-7 w-7 text-center`}
            >
              S
            </button>
            <button
              onClick={() => {
                setActiveSize("m");
              }}
              className={`${
                activeSize === "m" ? "bg-slate-900 text-white" : "border"
              }  rounded-full h-7 w-7 text-center`}
            >
              M
            </button>
            <button
              onClick={() => {
                setActiveSize("l");
              }}
              className={`${
                activeSize === "l" ? "bg-slate-900 text-white" : "border"
              }  rounded-full h-7 w-7 text-center`}
            >
              S
            </button>
          </div>
        </div>
        </div>
      </div>
      <button className="w-full mt-6 flex flex-row justify-between items-center bg-black text-white px-4 py-2">
        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faPlus} className="text-lg" />
          <span className="uppercase ml-2">ADD TO BASKET</span>
        </div>
        <div>
          <i className="far fa-heart text-xl mr-3 px-2"></i>
          {/* <i className="fa fa-heart text-lg"></i> */}
        </div>
      </button>
    </div>
  );
};

export default ProductDetail;
