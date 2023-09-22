import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { v4 as uuidv4 } from "uuid";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Link, useNavigate } from "react-router-dom";
import useBlogStore from "./zustand/Store";

const Just4uSlide = React.forwardRef((props, ref) => {
  const {setPreview} = useBlogStore()
  const navigateTo = useNavigate()
  const forYouArray = [
    {
      id: uuidv4(),
      image: [
        "https://www.designscene.net/wp-content/uploads/2021/09/Versace-Spring-Summer-2022-photo-courtesy-%C2%A9VERSACE-41.jpg",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 1 Fashion Gown - women",
      desc: "reversible angora cardigan",
      qty: 1,
      liked: false,
      otherInfo: [
        {
          title: "Materials",
          desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
        },
        {
          title: "Care",
          desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
        },
      ],
      caution: [
        "Do not use bleach",
        "Do not tumble dry",
        "Dry clean with tetrachloroethylene",
        "iron at a maximum of 110C/230F",
      ],
      shipping: {
        status: "free",
        price: "",
        from: "",
        to: "",
      },
      policy: {
        cod: "Dummy text for COD policy",
        return:
          "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
      },
    },
    {
      id: uuidv4(),
      image: [
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 1 Fashion Gown - women",
      desc: "reversible angora cardigan",
      qty: 1,
      liked: false,
      otherInfo: [
        {
          title: "Materials",
          desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
        },
        {
          title: "Care",
          desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
        },
      ],
      caution: [
        "Do not use bleach",
        "Do not tumble dry",
        "Dry clean with tetrachloroethylene",
        "iron at a maximum of 110C/230F",
      ],
      shipping: {
        status: "free",
        price: "",
        from: "",
        to: "",
      },
      policy: {
        cod: "Dummy text for COD policy",
        return:
          "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
      },
    },
    {
      id: uuidv4(),
      image: [
        "https://www.designscene.net/wp-content/uploads/2021/09/Versace-Spring-Summer-2022-photo-courtesy-%C2%A9VERSACE-41.jpg",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 1 Fashion Gown - women",
      desc: "reversible angora cardigan",
      qty: 1,
      liked: false,
      otherInfo: [
        {
          title: "Materials",
          desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
        },
        {
          title: "Care",
          desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
        },
      ],
      caution: [
        "Do not use bleach",
        "Do not tumble dry",
        "Dry clean with tetrachloroethylene",
        "iron at a maximum of 110C/230F",
      ],
      shipping: {
        status: "free",
        price: "",
        from: "",
        to: "",
      },
      policy: {
        cod: "Dummy text for COD policy",
        return:
          "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
      },
    },
    {
      id: uuidv4(),
      image: [
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 1 Fashion Gown - women",
      desc: "reversible angora cardigan",
      qty: 1,
      liked: false,
      otherInfo: [
        {
          title: "Materials",
          desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
        },
        {
          title: "Care",
          desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
        },
      ],
      caution: [
        "Do not use bleach",
        "Do not tumble dry",
        "Dry clean with tetrachloroethylene",
        "iron at a maximum of 110C/230F",
      ],
      shipping: {
        status: "free",
        price: "",
        from: "",
        to: "",
      },
      policy: {
        cod: "Dummy text for COD policy",
        return:
          "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
      },
    },
    {
      id: uuidv4(),
      image: [
        "https://www.designscene.net/wp-content/uploads/2021/09/Versace-Spring-Summer-2022-photo-courtesy-%C2%A9VERSACE-41.jpg",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 1 Fashion Gown - women",
      desc: "reversible angora cardigan",
      qty: 1,
      liked: false,
      otherInfo: [
        {
          title: "Materials",
          desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
        },
        {
          title: "Care",
          desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
        },
      ],
      caution: [
        "Do not use bleach",
        "Do not tumble dry",
        "Dry clean with tetrachloroethylene",
        "iron at a maximum of 110C/230F",
      ],
      shipping: {
        status: "free",
        price: "",
        from: "",
        to: "",
      },
      policy: {
        cod: "Dummy text for COD policy",
        return:
          "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
      },
    },
    {
      id: uuidv4(),
      image: [
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 1 Fashion Gown - women",
      desc: "reversible angora cardigan",
      qty: 1,
      liked: false,
      otherInfo: [
        {
          title: "Materials",
          desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
        },
        {
          title: "Care",
          desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
        },
      ],
      caution: [
        "Do not use bleach",
        "Do not tumble dry",
        "Dry clean with tetrachloroethylene",
        "iron at a maximum of 110C/230F",
      ],
      shipping: {
        status: "free",
        price: "",
        from: "",
        to: "",
      },
      policy: {
        cod: "Dummy text for COD policy",
        return:
          "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
      },
    },
    {
      id: uuidv4(),
      image: [
        "https://i0.wp.com/exquisitemag.com/wp-content/uploads/2023/04/ank.jpg",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 1 Fashion Gown - women",
      desc: "reversible angora cardigan",
      qty: 1,
      liked: false,
      otherInfo: [
        {
          title: "Materials",
          desc: `We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.`,
        },
        {
          title: "Care",
          desc: `To keep your jackets and coats clean, you only need to freshen them up and over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful og the environment.`,
        },
      ],
      caution: [
        "Do not use bleach",
        "Do not tumble dry",
        "Dry clean with tetrachloroethylene",
        "iron at a maximum of 110C/230F",
      ],
      shipping: {
        status: "free",
        price: "",
        from: "",
        to: "",
      },
      policy: {
        cod: "Dummy text for COD policy",
        return:
          "All products purchased not satisfying the specifications are liable to be returned within the period of 7days. \n Do not collect the product if the seal is removed.",
      },
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
    <div ref={ref} className="w-full mt-3 ">
      <Swiper
        className=" w-full h-full justify-center m"
        spaceBetween={10}
        slidesPerView={"1.3"} 
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
                src={obj.image}
                alt={obj.title}
                className="w-full object-cover object-top h-72"
                onClick={() => {
                  setPreview(forYouArray.find((item) => obj.id === item.id));
                  navigateTo(`/category/${obj.category}/${obj.id}`);
                }}
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
});

export default Just4uSlide;
