import { faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ setOpenSearch }) => {
  const [searchItem, setSearchItem] = useState("");
  const onSearchChange = () => {
    setSearchItem(searchItem);
  };
  const popularTerms = [
    "Trend",
    "Dress",
    "Bag",
    "Tshirt",
    "Beauty",
    "Accessories",
  ];
  return (
    <div className="fixed w-full bg-white h-screen top-0 bottom-0 z-20 p-5">
      <div className="w-full flex flex-col">
        <form className="w-full relative">
          <input
            type="search"
            name="searchItem"
            value={searchItem}
            onChange={onSearchChange}
            className="relative w-full border-b border-black p-2 px-10 text-lg"
            placeholder="Search items"
          />
          <div className="absolute w-full flex flex-row justify-between -mt-8">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-2xl font-thin"
            />
            <FontAwesomeIcon
              icon={faClose}
              className="text-2xl"
              onClick={() => setOpenSearch(false)}
            />
          </div>
        </form>
        <p className="my-3">Popular search terms</p>
        <div className="flex flex-col gap-y-3">
          {popularTerms &&
            popularTerms.map((term, index) => (
              <Link
                key={index}
                to="#"
                onClick={() => setSearchItem(term)}
                className="font-medium"
              >
                {term}
              </Link>
            ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Search;
