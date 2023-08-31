import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { list } from "postcss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RenderMenuList = ({ name, subItem, setOpenNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigateTo = useNavigate();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  //  console.log(subItem)
  return (
    <div className="w-full flex flex-col mt-6">
      <div className="relative flex flex-row justify-between px-7 mr-6">
        <button
          onClick={() => {
            setOpenNav(false)
            navigateTo(`/category/${name}`)
          }}
          className="relative flex flex-row w-full"
        >
          <span>{name}</span>
        </button>

        {subItem && (
          <FontAwesomeIcon
            onClick={handleClick}
            icon={faLessThan}
            rotation={isOpen ? 270 : 180}
            className="pl-3 text-gray-400"
          />
        )}
      </div>

      {subItem && isOpen && (
        <div className="ml-10 pt-3 flex flex-col gap-y-3">
          {subItem.map((subMenu, index) => (
            <div key={index} className="">
              {subMenu}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const MenuList = ({ setOpenNav, lists }) => {
  const listss = [
    {
      name: "New",
      subItems: [],
    },
    {
      name: "Apparel",
      subItems: ["Outer", "Dress", "Blouse/Shirt", "T-shirt"],
    },
    {
      name: "Bag",
    },
    {
      name: "Shoes",
    },
    {
      name: "Beauty",
    },
    {
      name: "Accessories",
    },
  ];
  const subMenu = lists.name.item;
  // console.log(subMenu)
  return (
    <div className="w-full ">
      <div className="">
        {subMenu.map((menu, index) => (
          <div key={index}>
            <RenderMenuList
              name={menu.name}
              subItem={menu.subItems}
              setOpenNav={setOpenNav}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
