import React, { useState } from "react";
import {
  faFilter,
  faGreaterThan,
  faHeart,
  faLessThan,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBlogStore from "../../../components/zustand/Store";
import { Link, useParams } from "react-router-dom";
import Card from "../../../components/Card";

const CategoryCard = ({ categoryOption, filtered, showProduct }) => {
  // console.log(showProduct)
  if (showProduct.length > 0) {
    filtered = showProduct;
  }

  const { name } = useParams();
  const { categories } = useParams();
  const { allArray, preview, setPreview } = useBlogStore();
  const [currentPage, setCurrentPage] = useState(1);
  let objPerPage = 6;
  let startIndex = objPerPage * (currentPage - 1);
  let endIndex = objPerPage + startIndex;
  //   let cardArray = allArray.slice(startIndex, endIndex)
  // console.log(allArray[name])

  const totalPages = Math.ceil(filtered.length / objPerPage);

  let cardArray =
    (filtered.length > 0 && filtered.slice(startIndex, endIndex)) ||
    allArray.slice(startIndex, endIndex);

  // console.log(cardArray)
  const [activePage, setActivePage] = useState(1);
  return (
    <div>
      <Card cardArray={cardArray} categories={categories} name={name} />
      {/* Pagination */}
      <div className="w-full flex flex-row justify-center gap-x-6 mt-12 items-center">
        {currentPage > 1 && (
          <FontAwesomeIcon
            icon={faLessThan}
            onClick={() => {
              setCurrentPage(currentPage - 1);
              setActivePage(currentPage - 1);
            }}
            className="text-lg"
          />
        )}
        <div className=" flex flex-row overflow-ato ">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index + 1);
                setActivePage(index + 1);
              }}
              className={` text-black py-1 px-3 ${
                index > activePage + 1 && "hidden"
              } ${index < activePage - 3 && "hidden"} ${
                activePage === index + 1
                  ? "bg-slate-900 text-white"
                  : "bg-[#faefeb]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {currentPage < totalPages && (
          <FontAwesomeIcon
            icon={faGreaterThan}
            onClick={() => {
              setCurrentPage(currentPage + 1);
              setActivePage(currentPage + 1);
            }}
            className="text-lg "
          />
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
