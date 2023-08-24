import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Blog = () => {
  const blogArticles = [
    {
      id: uuidv4(),
      image:
        "https://nextluxury.com/wp-content/uploads/trendy-spring-fashion-style.jpg",

      title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    },
    {
      id: uuidv4(),
      image:
        "https://nextluxury.com/wp-content/uploads/trendy-spring-fashion-style.jpg",

      title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    },
    {
      id: uuidv4(),
      image:
        "https://nextluxury.com/wp-content/uploads/trendy-spring-fashion-style.jpg",

      title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    },
    {
      id: uuidv4(),
      image:
        "https://nextluxury.com/wp-content/uploads/trendy-spring-fashion-style.jpg",

      title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    },
    {
      id: uuidv4(),
      image:
        "https://nextluxury.com/wp-content/uploads/trendy-spring-fashion-style.jpg",

      title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    },
  ];
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <h1 className="tracking-wider text-xl text-center ">BLOG</h1>
      <div className="flex flex-row justify-around mt-6">
        <span className="bg-slate-50">Fashion</span>
        <span className="bg-slate-50">Promo</span>
        <span className="bg-slate-50">Policy</span>
        <span className="bg-slate-50">Lookbook</span>
      </div>
      <div className="flex flex-col items-center gap-y-8 mt-8">
        {blogArticles.map((article) => (
          <div
            key={article.id}
            className=" h- w-[90%] flex flex-col justify-between"
          >
            <div
              className={`h-64 w-full bg-[url("${article.image}")] bg-cover text-slate-100 w-full flex flex-col justify-between`}
            >
              <div className="flex justify-end p-3 text-lg">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <p>{article.title}</p>
            </div>
            <div className="w-full flex flex-row justify-between ">
              <div className="flex flex-row gap-5">
                <p>#Fashion</p>
                <p>#Tips</p>
              </div>
              <div>
                <p>4 days ago</p>
              </div>
            </div>
          </div>
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
