import React from "react";
import ArrivalCards from "./arrivalCards";
import { v4 as uuidv4 } from "uuid";

const All = () => {
  const allArray = [
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
  return (
    <div>
      <ArrivalCards arrayList={allArray} />
    </div>
  );
};

export default All;
