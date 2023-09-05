import React, { useState } from 'react'
import {
  faFilter,
  faGreaterThan,
  faHeart,
  faLessThan,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBlogStore from './zustand/Store';
import {Link, useParams} from 'react-router-dom'

const CategoryCard = ({categoryOption, filtered}) => {
    const {name} = useParams()
    const {categories} = useParams()
  const { allArray, preview, setPreview } = useBlogStore();
    const [currentPage, setCurrentPage] = useState(1);
    let objPerPage = 4;
    let startIndex = objPerPage * (currentPage - 1);
    let endIndex = objPerPage + startIndex;
    //   let cardArray = allArray.slice(startIndex, endIndex)
    // console.log(allArray[name]) 
    
    const totalPages = Math.ceil(filtered.length / objPerPage);

    let cardArray =filtered.length >0 && filtered.slice(startIndex, endIndex) || allArray.slice(startIndex, endIndex)

    // console.log(cardArray)
    const [activePage, setActivePage] = useState(1);
  return (
    <div>
      <div className="w-full mt-3 grid grid-cols-2 place-items-center px-2 gap-y-5 gap-x-3">
        {cardArray.length >0 && cardArray.map((item, index) => (
          <div key={index} className="w-full flex flex-col z-10">
            <div className="w-full">
              <img
                src={item.image[0]}
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
                    <FontAwesomeIcon icon={faHeart} className="" />
                  ) : (
                    <i className="far fa-heart "></i>
                  )}
                </button>
              </div>
            </div>
            <Link 
            to={`/${categories}/${name}/${item.id}`}
            onClick={()=>setPreview(cardArray.find((prev)=>prev.id === item.id)
            )}
             className="mt-3">
              <h3 className="uppercase font-medium">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
              <p className="text-price-brown">${item.price}</p>
            </Link>
          </div>
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
              activePage === index + 1
                ? "bg-slate-900 text-white"
                : "bg-[#faefeb]"
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
}

export default CategoryCard
