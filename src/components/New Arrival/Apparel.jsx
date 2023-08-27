import React from "react";
import ArrivalCards from "./ArrivalCards";
import { v4 as uuidv4 } from "uuid";

const Apparel = () => {
  const apparelArray = [
    {
      id: uuidv4(),
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpfPFW_E7Xza5R2CokNQDMdvL7V-I8C9YZg&usqp=CAU",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4FY-RZnX-ppiKufMv23uht3w4rX3r5V7vQ&usqp=CAU",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiYFZbZCOeB1pZvyBQECWAUcbS12-dbqXcA&usqp=CAU",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOvqNFZr_j25mKgwXvGxGLDHuf8_-hdOn_Q&usqp=CAU",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://www.shutterstock.com/shutterstock/photos/2288163851/display_1500/stock-photo-models-fashion-miss-de-mode-glamour-fashion-model-2288163851.jpg",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWDw9xCRkBuWkIoeF4n_WHBjJWbb2FMpHpw&usqp=CAU",
      title: "Ankara",
      price: "$120",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
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
