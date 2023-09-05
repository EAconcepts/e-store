import React from "react";
import { v4 as uuidv4 } from "uuid";
import ArrivalCards from "./ArrivalCards";

const Tshirt = () => {
  const tShirtArray = [
    {
      id: uuidv4(),
      image: [
        "https://img.mensxp.com/media/content/2022/Dec/iStock-1280562095_63a051a70dbff.jpeg",
      ],
      price: "120",
      category: "bag",
      title: "Numer 7 T-shirt - women",
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
      title: "Numer 2 T-shirt - women",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mpFPq_9fHbnVaspoty8dJXYBkRFIeodFyA&usqp=CAU",
      ],
      price: "120",
      category: "t-shirt",
      title: "Numer 3 T-shirt - women",
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
      title: "Numer 4 T-shirt - women",
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
        "https://assets.ajio.com/medias/sys_master/root/20230623/BbG2/649555e6eebac147fcd18547/-473Wx593H-464918983-blue-MODEL.jpg",
      ],
      price: "120",
      category: "t-shirt",
      title: "Numer 5 T-shirt - women",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlwWE9-J-QMYWYD6RI8783QaSeEL_FU5yCA&usqp=CAU",
      ],
      price: "120",
      category: "bag",
      title: "Numer 6 T-shirt - women",
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
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/77a37912-9f4f-4e69-8972-7f98bf36175c/jordan-sport-graphic-t-shirt-0PM7k2.png",
      ],
      price: "120",
      category: "t-shirt",
      title: "Numer 7 T-shirt - women",
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
      <ArrivalCards arrayList={tShirtArray} />
    </div>
  );
};

export default Tshirt;
