import React from "react";
import ArrivalCards from "./ArrivalCards";
import { v4 as uuidv4 } from "uuid";

const Apparel = () => {
  const apparelArray = [
    {
      id: uuidv4(),
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpfPFW_E7Xza5R2CokNQDMdvL7V-I8C9YZg&usqp=CAU",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4FY-RZnX-ppiKufMv23uht3w4rX3r5V7vQ&usqp=CAU",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 2 Fashion Gown - women",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiYFZbZCOeB1pZvyBQECWAUcbS12-dbqXcA&usqp=CAU",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOvqNFZr_j25mKgwXvGxGLDHuf8_-hdOn_Q&usqp=CAU",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 4 Fashion Gown - women",
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
        "https://www.shutterstock.com/shutterstock/photos/2288163851/display_1500/stock-photo-models-fashion-miss-de-mode-glamour-fashion-model-2288163851.jpg",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 5 Fashion Gown - women",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWDw9xCRkBuWkIoeF4n_WHBjJWbb2FMpHpw&usqp=CAU",
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
        "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 7 Fashion Gown - women",
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
  return (
    <div className="">
      <ArrivalCards arrayList={apparelArray} />
    </div>
  );
};

export default Apparel;
