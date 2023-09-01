import { faFilter, faGreaterThan, faHeart, faLessThan, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useBlogStore from "./zustand/Store";

const Category = () => {
  const { name } = useParams();
  const {apparelArray} = useBlogStore()
  const filterCatgeroy = ["Women", "All apparel"];
  
  const [currentPage, setCurrentPage] = useState(1)
  let objPerPage = 4
  const totalPages =Math.ceil(apparelArray.length / objPerPage)
  let startIndex = objPerPage * (currentPage-1) 
  let endIndex =     objPerPage + startIndex 
//   let cardArray = apparelArray.slice(startIndex, endIndex)
  const [cardArray, setCardArray] = useState(apparelArray.slice(startIndex, endIndex));
  const [activePage, setActivePage] = useState(1)
// console.log(currentPage)
  
useEffect(()=>{
    setCardArray(apparelArray.slice(startIndex, endIndex))
},[currentPage])
  return (
    <div className="flex flex-col w-full px-2 mt-6">
      <div className="w-full flex flex-row justify-between px-2">
        <h3 className="uppercase">4500 {name}</h3>
        <div className="flex flex-row gap-x-3 items-center">
          <select className="rounded-full bg-slate-100 p-1">
            <option>New</option>
          </select>
          <FontAwesomeIcon
            icon={faList}
            className="border rounded-full bg-slate-100 p-2"
          />
          <FontAwesomeIcon icon={faFilter} />
        </div>
      </div>
      <div className="w-full flex flex-row gap-x-2 mt--2">
        {filterCatgeroy &&
          filterCatgeroy.map((filtered, index) => (
            <button key={index} className="border rounded-full p-1 px-2">
              {filtered}
              <span className="ml-2">x</span>
            </button>
          ))}
      </div>
      <div className="w-full mt-3 grid grid-cols-2 place-items-center px-2 gap-y-5 gap-x-3">
        {cardArray.map((item, index) => (
          <Link to={`/category/${name}/${item.id}`} key={index} className="w-full flex flex-col">
            <div className="w-full">
              <img
                src={item.image[0] }
                alt={`${item.title} image`}
                className="relative w-full h-48 object-cover border border-[#a8715c] bg-[#e7dcd7] p-1 -z-10"
              />
              <div className="w-full text-end -mt-7 z-20 pr-2">
                <button
                  className="text-price-brown"
                  onClick={() => {
                    const updatedArray = cardArray.map((obj) => {
                      if (obj.id === item.id) {
                        return { ...obj, liked: !obj.liked };
                      }
                      return obj;
                    });
                    setCardArray(updatedArray);
                  }}
                >
                  {item.liked === true ? (
                    <FontAwesomeIcon icon={faHeart} />
                  ) : (
                    <i className="far fa-heart"></i>
                  )}
                </button>
              </div>
            </div>
            <div className="mt-3">
              <h3 className="uppercase font-medium">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
              <p className="text-price-brown">${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
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
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(index + 1);
              setActivePage(index + 1);
            }}
            className={` text-black py-1 px-3 ${
              activePage === index+1 ? "bg-slate-900 text-white" : "bg-[#faefeb]"
            }`}
          >
            {index + 1}
          </button>
        ))}
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

export default Category;
