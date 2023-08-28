import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { v4 as uuidv4 } from "uuid";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Just4uSlide = () => {
  const forYouArray = [
    {
      id: uuidv4(),
      imgUrl:
        "https://www.designscene.net/wp-content/uploads/2021/09/Versace-Spring-Summer-2022-photo-courtesy-%C2%A9VERSACE-41.jpg",
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
        "https://www.designscene.net/wp-content/uploads/2021/09/Versace-Spring-Summer-2022-photo-courtesy-%C2%A9VERSACE-41.jpg",
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
        "https://www.designscene.net/wp-content/uploads/2021/09/Versace-Spring-Summer-2022-photo-courtesy-%C2%A9VERSACE-41.jpg",
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
    <div className="w-full mt-3 ">
      <Swiper
        className=" w-full h-full justify-center m"
        spaceBetween={10}
        slidesPerView={"1.3"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {forYouArray &&
          forYouArray.map((obj) => (
            <SwiperSlide
              key={obj.id}
              className="w-full mb-6 flex flex-col items-center pb-2"
            >
              <img
                src={obj.imgUrl}
                alt={obj.title}
                className="w-full object-cover object-top h-72"
              />
              <div className="px-2">
                <p className="text-sm">{obj.title}</p>
                <p className="text-[#dd8560]">{obj.price}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Just4uSlide;
