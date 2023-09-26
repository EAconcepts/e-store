import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
import {useNavigate} from 'react-router-dom'
import useBlogStore from "../zustand/Store";

const ArrivalCards = ({ arrayList }) => {
  const {setPreview, preview} = useBlogStore()
  const navigateTo = useNavigate()
  return (
    <div className="w-full p-2 ">
      <div className="w-full grid grid-cols-2 md:grid-cols-4  place-items-center gap-y-3 md:gap-y-10">
        {arrayList &&
          arrayList.map((obj) => (
            <div className="text-center text-sm" key={obj.id}>
              <img
                src={obj.image}
                alt={obj.title}
                className="h-36 md:h-64 w-36 md:w-64 object-cover md:object-top"
                onClick={() => {
                  setPreview(arrayList.find((item) => obj.id === item.id));
                  navigateTo(`/category/${obj.category}/${obj.id}`);
                }}
              />
              <p className="text-[#4c4c4c]">{obj.title}</p>
              <p className=" text-[#dd8560]">{obj.price}</p>
            </div>
          ))}
      </div>
      <div className="mt-6">
        <Link
          to="/categories/all"
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
