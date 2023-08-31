import { faFilter, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { name } = useParams();
  const filterCatgeroy =['Women','All apparel']
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
          filterCatgeroy.map((filtered) => (
            <button className="border rounded-full p-1 px-2">
                {filtered}
                <span className="ml-2">x</span>
            </button>
          ))}
      </div>
      <div className="w-full flex flex-col"></div>
    </div>
  );
};

export default Category;
