import React from "react";
import { v4 as uuidv4 } from "uuid";
import ArrivalCards from "./ArrivalCards";

const Bag = () => {
  const bagArray = [
    {
      id: uuidv4(),
      image: [
        "https://media.istockphoto.com/id/1271796113/photo/women-is-holding-handbag-near-luxury-car.jpg?s=612x612&w=0&k=20&c=-jtXLmexNgRa-eKqA1X8UJ8QYWhW7XgDiWNmzuuCHmM=",
      ],
      price: "120",
      category: "bag",
      title: "Numer 1 bag - women",
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
        "data:image/jpeg;base64,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",
      ],
      price: "120",
      category: "bag",
      title: "Numer 2 bag - women",
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
        "data:image/jpeg;base64,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",
      ],
      price: "120",
      category: "bag",
      title: "Numer 3 bag - women",
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
        "data:image/jpeg;base64,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",
      ],
      price: "120",
      category: "bag",
      title: "Numer 4 bag - women",
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
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?cs=srgb&dl=pexels-ge-yonk-1152077.jpg&fm=jpg",
      ],
      price: "120",
      category: "bag",
      title: "Numer 5 bag - women",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-aKPmyHDJ9XqugnEbLNRfGZs7mGfHkIfUQ&usqp=CAU",
      ],
      price: "120",
      category: "bag",
      title: "Numer 6 bag - women",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg0xCL6H_YQ7pf5sDZYc7_ZnflApwkmiLAg&usqp=CAU",
      ],
      price: "120",
      category: "bag",
      title: "Numer 7 bag - women",
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
    <div>
      <ArrivalCards arrayList={bagArray} />
    </div>
  );
};

export default Bag;
