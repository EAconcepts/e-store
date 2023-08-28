import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

const ArrivalCards = ({ arrayList }) => {
  return (
    <div className="w-full p-2 ">
      <div className="w-full grid grid-cols-2 place-items-center gap-y-3">
        {arrayList &&
          arrayList.map((obj) => (
            <div className="text-center text-sm" key={obj.id}>
              <img
                src={obj.imgUrl}
                alt={obj.title}
                className="h-36 w-36 object-cover"
              />
              <p className="text-[#4c4c4c]">{obj.title}</p>
              <p className=" text-[#dd8560]">{obj.price}</p>
            </div>
          ))}
      </div>
      <div className="mt-6">
        <Link
          to="/"
          className="w-full flex flex-row justify-center items-center gap-x-2 font-medium"
        >
          Explore More
          <FontAwesomeIcon icon={faArrowRightLong} className=" opacity-70" />
        </Link>
      </div>
    </div>
  );
};

export default ArrivalCards;
