import {
  faArrowLeftLong,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NoMatch404 = () => {
  return (
    <div className="mt-12 flex flex-col w-full items-center px-10">
      <h1 className="uppercase font-medium text-2xl tracking-widest">
        PAGE NOT FOUND
      </h1>
      <FontAwesomeIcon
        icon={faThumbtack}
        className="mt-12 text-xl h-10 font-thin text-[#a8715c]"
      />
      <p className="mt-4 text-lg text-center">
        We can't find the page you're looking for, click the button below to
        return to the homepage
      </p>
      <Link to="/" className="mt-4 text-slate-300 bg-black px-5 py-1">
        <FontAwesomeIcon icon={faArrowLeftLong} className="xl" />
        <span className="uppercase text-lg ml-1">HOME PAGE</span>
      </Link>
    </div>
  );
};

export default NoMatch404;
