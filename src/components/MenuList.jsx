import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { list } from "postcss";
import React, { useState } from "react";

const RenderMenuList = ({name, subItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="w-full flex flex-col mt-6">
      <button
        onClick={handleClick}
        className="relative flex flex-row justify-between px-7 mr-6"
      >
        <span>{name}</span>
        <FontAwesomeIcon
          icon={faLessThan}
          rotation={isOpen ? 270 : 180}
          className="text-gray-400"
        />
      </button>
      { subItem && isOpen &&
      <div className="ml-10 pt-3 flex flex-col gap-y-3">
        {subItem.map((subMenu, index)=>(
          <div key={index}
          className=""
          >
            {subMenu}
          </div>
        ))}
      </div>
      }
    </div>
  );
};
const MenuList = () => {

  const lists = [
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
  ];

  return (
    <div className="w-full ">
      {lists.map((menu, index) => (
        <div key={index}>
            <RenderMenuList name={menu.name} subItem={menu.subItems} />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
