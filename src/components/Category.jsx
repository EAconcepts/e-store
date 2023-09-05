import {
  faFilter,
  faGreaterThan,
  faHeart,
  faLessThan,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CategoryCard from "./CategoryCard";
import useBlogStore from "./zustand/Store";

const Category = () => {
  let { names } = useParams();
  let { categories } = useParams();
  // console.log(names)
  const menCategories = ["tops", "shoes", "accessories"];
  const womenCategories = ["apparel", "bag", "shoes", "beauty", "accessories"];
  const kidsCategories = ["apparel", "bag", "shoes", "beauty", "accessories"];
  const [subCategory, setSubCateory] = useState(names.toLowerCase());

  const { allArray } = useBlogStore();
  const filterCatgeroy = ["Women", "All", "apparel"];
  const [categoryOption, setOption] = useState("");
  let allProducts = [];

  let filtered = allArray.map((filter) => {
    let filteredValues = Object.values(filter);
    filteredValues.map((values) => {
      // console.log(a)
      values.map((obj) => {
        allProducts.push(obj);
        console.log();
        return obj;
      });
    });
    return filter;
  });

  let category = allArray.find((list, index) => {
    let filteredCategory =
      Object.keys(list).toString() === categories.toLowerCase() ||
      Object.values(list).Category === subCategory;
    return filteredCategory;
  });

  // console.log(subCategory);
  let categoryValue;
  if (category) {
    categoryValue = Object.values(category);
  }
  let filteredSubCat = [];
  if (subCategory !== "all") {
    let i = categoryValue[0];
    filteredSubCat = i.filter((obj) => {
      return obj.category.toLowerCase() === subCategory.toLowerCase();
    });
    //  console.log(filteredSubCat);
  }

  // console.log(j)
  if (subCategory === "all" && allProducts.length > 0) {
    filtered = allProducts;
  } else {
    filtered = filteredSubCat;
  }
  const handleSelectChange = () => {
    setOption(event.target.value);
    setSubCateory(event.target.value);
  };
  useEffect(() => {
    setSubCateory(names);
  }, [names]);

  // console.log(categories);
  return (
    <div className="flex flex-col w-full px-2 mt-6">
      <div className="w-full flex flex-row justify-between px-2">
        <h3 className="uppercase">
          {filtered.length} {categories}
        </h3>
        <div className="flex flex-row gap-x-3 items-center">
          <select
            onChange={handleSelectChange}
            className="rounded-full bg-slate-100 p-1"
          >
            <option value="" selected disabled hidden>
              Categories
            </option>
            {
            categories.toLowerCase() === "men"
              ? menCategories.map((obj, index) => (
                  <option key={index} value={obj}>
                    {obj}
                  </option>
                ))
              : categories.toLowerCase() === "women"
              ? womenCategories.map((obj, index) => (
                  <option key={index} value={obj}>
                    {obj}
                  </option>
                ))
              : kidsCategories.map((obj, index) => (
                  <option key={index} value={obj}>
                    {obj}
                  </option>
                ))}
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
      { filtered.length > 0 ?
      <CategoryCard categoryOption={categoryOption} filtered={filtered} />
      : 
      <h2 className="mt-10 w-full text-center text-lg font-medium">No match found!!</h2>
}
    </div>
  );
};

export default Category;
