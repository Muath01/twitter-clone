import React from "react";

function Menu() {
  return (
    <div
      className=" text-white fixed
  bottom-0 w-full h-[7%] flex justify-between bg-[#15202B] shadow-lg text-[24px] border py-6 border-gray-600 "
    >
      <p className="  h-full w-full  flex justify-center items-center">
        <i className="fa-solid fa-house-chimney-window"></i>
      </p>
      <p className="  h-full w-full  flex justify-center items-center">
        <i className="fa-regular fa-bell"></i>
      </p>
      <p className="  h-full w-full  flex justify-center items-center">
        <i className="fa-regular fa-envelope"></i>
      </p>
      <p className="  h-full w-full  flex justify-center items-center">
        <i className="fa-solid fa-user"></i>
      </p>
    </div>
  );
}

export default Menu;
