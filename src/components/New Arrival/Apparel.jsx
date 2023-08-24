import React from "react";
import ArrivalCards from "./ArrivalCards";
import { v4 as uuidv4 } from "uuid";

const Apparel = () => {
  const apparelArray = [
    {
      id: uuidv4(),
      imgUrl:
        "https://images.yen.com.gh/images/3o3bpd4h8nls4ouno.jpg?imwidth=900",
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
        "https://images.yen.com.gh/images/3o3bpd4h8nls4ouno.jpg?imwidth=900",
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
        "https://images.yen.com.gh/images/3o3bpd4h8nls4ouno.jpg?imwidth=900",
      title: "Ankara",
      price: "$120",
    },
  ];
  return (
    <div className="">
      <ArrivalCards arrayList={apparelArray} />
    </div>
  );
};

export default Apparel;
