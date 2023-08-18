import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

const Just4uSlide = () => {
  const forYouArray = [
    {
      id: uuidv4(),
      imgUrl:
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      title: "Ankara",
      price: "$120",
    },
  ];
  const settings = {
    dots: true,
    speed: 500,
    slideToShow: 2,
    wipeToSlide: true,
    afterChange: (index) => {
      console.log(`Slider changed to ${index + 1}`);
    },
  };
  return (
    <div className="w-full">
      <h1>JUST FOR YOU</h1>
      <Swiper
        className=" w-full h-full"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {forYouArray &&
          forYouArray.map((obj) => (
            <SwiperSlide key={obj.id}>
              <img
                src={obj.imgUrl}
                alt={obj.title}
                className="w-full object-cover h-36"
              />
              <p className="text-sm">{obj.title}</p>
              <p className="text-[#dd8560]">{obj.price}</p>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Just4uSlide;
