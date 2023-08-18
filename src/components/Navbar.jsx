import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingBag,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between p-2">
      <FontAwesomeIcon icon={faBars} className="text-lg" />
      <Link to="/" className="text-lg">
        Open Fashion
      </Link>
      <div className="flex flex-row gap-x-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faShoppingBag} />
      </div>
    </div>
  );
};

export default Navbar;
