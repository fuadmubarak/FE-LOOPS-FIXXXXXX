import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="w-full shadow-xl shadow-kedua ring-2 ring-kedua z-50 fixed top-0">
      <div className=" bg-gray-50 py-4 md:justify-between md:px-10 px-7">
        <div className="grid grid-flow-col grid-cols-4 grid-rows-1 pr-48">
          <div className="grid justify-items-start md:justify-between col-span-1">
            <img
              className=" w-28"
              src={require("../navbar/loops.png")}
              alt=""
            />
          </div>
          <div className="grid justify-items-end col-span-1 pt-0.5 pr-1.5">
            <AiFillCaretLeft className="w-14 h-7 text-kedua hover:text-white  hover:bg-utama rounded-full" />
          </div>
          <div className="col-span-1 font-serif text-2xl text-left font-semibold text-kedua">
            List Of Transaction
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
