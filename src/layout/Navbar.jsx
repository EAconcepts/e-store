import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingBag,
  faMagnifyingGlass,
  faClose,
  faArrowDownLong,
  faPhone,
  faLocation,
  faLocationPin,
  faMapLocation,
  faMapLocationDot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import MenuList from "../components/MenuList";
import Search from "../components/Search";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Women");
  const [openSearch, setOpenSearch] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const lists = [
    {
      category: "Women",
      name: {
        item: [
          {
            name: "New",
            subItems: ["Outer", "Dress", "Blouse/Shirt", "T-shirt"],
          },
          { name: "Apparel" },
          { name: "Bag" },
          { name: "Shoes" },
          { name: "Beauty" },
          { name: "Accessories" },
        ],
      },

      items: "New",
      subItems: [],
    },
    {
      category: "Men",
      name: {
        item: [
          {
            name: "New",
            subItems: ["Outer", "Dress", "Blouse/Shirt", "T-shirt"],
          },
          { name: "Tops" },
          // { name: "Bag" },
          { name: "Shoes" },
          // { name: "Beauty" },
          { name: "Accessories" },
        ],
      },

      items: "New",
      subItems: [],
    },
    {
      category: "Kids",
      name: {
        item: [
          {
            name: "New",
            subItems: ["Outer", "Dress", "Blouse/Shirt", "T-shirt"],
          },
          { name: "Apparel" },
          { name: "Bag" },
          { name: "Shoes" },
          { name: "Beauty" },
          { name: "Accessories" },
        ],
      },

      items: "New",
      subItems: [],
    },
  ];
  // console.log(lists)
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-row justify-between items-center p-1 px-4">
        <svg
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.306763 12.7537H15.9824" stroke="#14142B" />
          <path d="M0.306641 5.75366H23.6931" stroke="#14142B" />
          <path d="M0.306641 19.7537H23.6931" stroke="#14142B" />
        </svg>

        <Link
          to="/"
          className="flex flex-col items-center -space-y-3 text-2xl font-medium lg:font-semibold"
        >
          <h1 className="">Open </h1>
          <h1>Fashion</h1>
        </Link>
        <div className="flex flex-row items-center space-x-4 text-2xl lg:text-lg ">
          <NavLink to='/category/all' className='hover:opacity-70 hidden lg:block'>Categories</NavLink>
          <NavLink to='/blog' className='hover:opacity-70 hidden lg:block'>Blogs</NavLink>
          <NavLink to='/contact' className='hover:opacity-70 hidden lg:block'>Contact</NavLink>
          <NavLink to='/cart' className='hover:opacity-70 hidden lg:block'>Cart</NavLink>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className=""
            onClick={() => setOpenSearch(true)}
          />
          <NavLink to="/cart" className='lg:hidden'>
            <FontAwesomeIcon icon={faShoppingBag} className="" />
          </NavLink>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          animate={"open"}
          initial={"closed"}
          variants={variants}
          type={"spring"}
          // damping={10}
          stiffness={10}
          className="fixed w-full h-screen z-20 top-0 bottom-0 left-0 bg-white px-2"
        >
          <FontAwesomeIcon
            icon={faClose}
            className="text-xl p-2 "
            onClick={() => setIsOpen(false)}
          />
          {/* {Nav top Menu} */}
          <div className="flex flex-row w-full justify-around px- text-slate-400 ">
            {lists &&
              lists.map((menu, index) => (
                <button
                  key={index}
                  className={` ${
                    activeLink === menu.category
                      ? "text-slate-800 font-medium uppercase border-b pb-1 border-yellow-900"
                      : "uppercase border-b pb-1 border-slate-300"
                  }
              `}
                  onClick={() => setActiveLink(`${menu.category}`)}
                >
                  {menu.category}
                </button>
              ))}
          </div>

          <div className="w-full h-80 overflow-scroll">
            <MenuList
              setOpenNav={setIsOpen}
              category={activeLink}
              lists={
                activeLink === "Women"
                  ? lists[0]
                  : activeLink === "Men"
                  ? lists[1]
                  : lists[2]
              }
            />
          </div>
          <div className="w-full absolute bottom-0 text-lg px-4 ">
            <a
              href="tel:08139468253"
              className="flex flex-row items-center w-full pb-2"
            >
              <FontAwesomeIcon icon={faPhone} />
              <span className="ml-3">(768) 713-8616</span>
            </a>
            <Link to="#" className="flex flex-row pb-7">
              <FontAwesomeIcon icon={faLocationDot} />
              <span className=" ml-3">Store locator</span>
            </Link>
            <div className="flex flex-row w-full justify-center gap-x-7 text-2xl pb-5">
              <a href="https://twitter.com" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </motion.nav>
      )}
      {openSearch && (
        // <div className="fixed w-full h-screen z-20 top-0 bottom-0">
        <Search setOpenSearch={setOpenSearch} />
        // </div>
      )}
    </div>
  );
};

export default Navbar;
