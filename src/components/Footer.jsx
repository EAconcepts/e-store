import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const divider = (
  <div className="w-full flex flex-row justify-center my-3">
    <div className="w-32 border-b border-slate-400"></div>
  </div>
);
const Footer = () => {
    
  return (
    <div>
    <div className="w-full mt-14 flex flex-col items-center">
      <div className="w-full flex flex-row  justify-center gap-x-16 text-lg font-bold">
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
      </div>
      {divider}
      <div className="flex flex-col gap-y-2 my-2">
      <a href="mailto:amooemmanuel10@gmailcom" className="">
        support@openui.design
      </a>
      <a href="tel:+2348139468253">+234 813 946 8253</a>
      <p>08:00 - 22:00 - Everyday</p>
      </div>
      {divider}
      <nav className="w-full flex flex-row justify-evenly my-3">
        <Link to="/about" className="">
          About
        </Link>
        <Link to="/contact" className="">
          Contact</Link>
          <Link to="/blog" className="">
            Blog
          </Link>
        
      </nav>
    </div>
    <p className="w-full bg-gray-100 text-center py-3 text-xs">Copyright &copy; EAconcepts All Rights Reserved. </p>
    </div>
  );
};

export default Footer;
