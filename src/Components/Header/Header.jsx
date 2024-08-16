import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="h-20   w-full flex items-center" >
        <nav className="flex justify-between px-24 w-full items-center" >
          <div className="right">
            <h2 className="text-2xl">Neelgai</h2>
          </div>
 
          <div className="left flex gap-14 items-center">
          <ul className="flex text-[18px] capitalize gap-10">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about ">about</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/bootcamp">Bootcamp</Link>
            </li>
            <li>
              <Link to="/hiring">Hiring</Link>
            </li>
          </ul> 
          <div className="flex justify-center items-center bg-black text-white   rounded-full px-5 py-2  ">
            <button type="button">Book a call</button>
          </div>
        </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
