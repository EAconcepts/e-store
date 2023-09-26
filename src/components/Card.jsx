import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import useBlogStore from './zustand/Store';

const Card = ({cardArray, setCardArray, categories, name}) => {
    const { setPreview } = useBlogStore();
  return (
    <>
      <div className="w-full mt-3 grid grid-cols-2 md:grid-cols-4 place-items-center px-2 gap-y-5 md:gap-y-20 gap-x-3  py-2">
        {cardArray.length > 0 &&
          cardArray.map((item, index) => (
            <div key={index} className="w-full flex flex-col z-10 h-72 md:h-78 ">
              <div className="w-full">
                <img
                  src={item.image[0]}
                  alt={`${item.title} image`}
                  className="relative w-full h-48 md:w-64 md:h-72 object-cover md:object-top border border-[#a8715c] bg-[#e7dcd7] p-1 -z-10"
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
                onClick={() =>
                  setPreview(cardArray.find((prev) => prev.id === item.id))
                }
                className="mt-3"
              >
                <h3
                  className={`uppercase font-medium text- ${
                    item.title.length >= 26 && "text-[10x]"
                  }`}
                >
                  {item.title.substring(0, 28)}...
                </h3>
                {/* <p className="text-sm">{item.desc.substring(0, 12)}</p> */}
                <p className="text-price-brown">${item.price}</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Card