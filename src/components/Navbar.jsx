import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingBag,
  faMagnifyingGlass,
  faClose,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import MenuList from "./MenuList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('women')
  
  return (
    <div className="relative w-full flex flex-row justify-between p-2">
      <FontAwesomeIcon
        icon={faBars}
        className="text-lg"
        onClick={() => setIsOpen(!isOpen)}
      />
      <Link to="/" className="text-lg">
        Open Fashion
      </Link>
      <div className="flex flex-row gap-x-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faShoppingBag} />
      </div>
      {isOpen && (
        <nav className="fixed w-full h-screen z-20 top-0 bottom-0 left-0 bg-white px-2">
          <FontAwesomeIcon
            icon={faClose}
            className="text-xl p-2 "
            onClick={() => setIsOpen(false)}
          />
          {/* {Nav top Menu} */}
          <div className="flex flex-row w-full justify-around px- text-slate-400 ">
            <button
              className={` ${
                activeLink === "women"
                  ? "text-slate-800 font-medium uppercase border-b pb-1 border-yellow-900"
                  : "uppercase border-b pb-1 border-slate-300"
              }
              `}
              onClick={() => setActiveLink("women")}
            >
              Women
            </button>
            <button
              className={` ${
                activeLink === "men"
                  ? "text-slate-800 font-medium uppercase border-b pb-1 border-yellow-900"
                  : "uppercase border-b pb-1 border-slate-300"
              }
              `}
              onClick={() => setActiveLink("men")}
            >
              Men
            </button>
            <button
              className={` ${
                activeLink === "kids"
                  ? "text-slate-800 font-medium uppercase border-b pb-1 border-yellow-900"
                  : "uppercase border-b pb-1 border-slate-300"
              }
              `}
              onClick={() => setActiveLink("kids")}
            >
              Kids
            </button>
          </div>
          <div className="w-full">
            {
              <MenuList/>
            }
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
