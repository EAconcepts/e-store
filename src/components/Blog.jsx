import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useBlogStore from "./zustand/Store";
const Blog = () => {
  const {blogPosts} = useBlogStore()
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <h1 className="tracking-wider text-xl text-center font-semibold ">BLOG</h1>
      <div className="flex flex-row justify-around mt-6">
        <span className="bg-slate-50">Fashion</span>
        <span className="bg-slate-50">Promo</span>
        <span className="bg-slate-50">Policy</span>
        <span className="bg-slate-50">Lookbook</span>
      </div>
      <div className="flex flex-col items-center gap-y-8 mt-8">
        {blogPosts.map((article) => (
          <Link
            to={`/blog/${article.id}`}
            key={article.id}
            className=" h- w-[90%] flex flex-col justify-between"
          >
            <div
              className={`relative h-64 w-full text-slate-100 flex flex-col justify-between`}
            >
              {/* <div className="relative w-full"> */}
                <img
                  src={article.image}
                  alt="image"
                  className="absolute w-full h-full -z-10 object-cover object-top"
                />
              {/* </div> */}
              <div className="flex justify-end p-3 text-lg">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <p className="py-4 bg-gradient-to-t from-black">
                {article.title}
              </p>
            </div>
            <div className="w-full flex flex-row justify-between text-sm mt-1 ">
              <div className="flex flex-row gap-5 ">
                <p>#Fashion</p>
                <p>#Tips</p>
              </div>
              <div>
                <p>4 days ago</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-row w-full justify-center">
        <button className="uppercase border ">
          <span>Load More</span>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default Blog;
