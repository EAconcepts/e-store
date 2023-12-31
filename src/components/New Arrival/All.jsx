import React from "react";
import ArrivalCards from "./ArrivalCards";
import { v4 as uuidv4 } from "uuid";

const All = () => {
  const allArray = [
    {
      id: uuidv4(),
      image: [
        "data:image/jpeg;base64,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",
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
        "https://www.stylecraze.com/wp-content/uploads/2018/01/50-Fashion-Tips-Every-Girl-Should-Know.jpg",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 2 women Croc Top",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U9qT0dlXNGvjXKFa9ECehURt12cmN9Hfcw&usqp=CAU",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 3 Shirt - women",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nj8ZTO1q594fUNgU_A1gmmPdhgDrHoe4zg&usqp=CAU",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 4 Gown - women",
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
        "https://media.istockphoto.com/id/1207472153/photo/african-american-woman-in-jacket-with-hands-in-pockets-looking-at-camera-isolated-on-turquoise.jpg?s=612x612&w=0&k=20&c=_qp_Bna-Ek8b9jSPi-B2DnkYJRggo-X3rA_wgziL3VU=",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 5 Jacket - women",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSorIANtEsIjkBB4UUCLsQgUy6RNdnR13Bzw&usqp=CAU",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 6 Gown - women",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpfjJbeeAkKF0gnbOCi8itRPpNtOZmFexvw&usqp=CAU",
      ],
      price: "120",
      category: "apparel",
      title: "Numer 7 gown - women",
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
      <ArrivalCards arrayList={allArray} />
    </div>
  );
};

export default All;
