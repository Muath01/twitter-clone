import React from "react";

function Menu() {
  return (
    <div
      className=" text-white fixed z-10
                  bottom-0 w-full h-[10%] flex justify-between bg-[#15202B] shadow-lg text-[24px]  py-6 border-gray-600
                   sm:w-[100%]   sm:flex-col 
                  sm:relative sm:h-[100%] 
                  border md:items-end
       "
    >
      <div className=" xl:text-[20px] text-[25px] flex justify-around items-center  w-full relative  h-full sm:flex-col sm:gap-[2.3rem]  md:gap-10 xl:gap-6 xl:items-start  md:w-3/5  sm:items-center sm:justify-start ">
        <div className="xl:flex justify-center items-center gap-5 hidden">
          <i className="fa-brands fa-twitter text-white text-[24px] mt-1  "></i>
        </div>
        <p className="flex justify-center items-center gap-5 ">
          <i className="fa-solid fa-house-chimney-window"></i>
          <p className="relative hidden xl:block ">Home</p>
        </p>
        <p className="flex justify-center items-center gap-5 ">
          <i className="fa-solid fa-magnifying-glass"></i>
          <p className="relative hidden xl:block ">Explore</p>
        </p>

        <p className="flex justify-center items-center gap-5">
          <i className="fa-regular fa-bell"></i>
          <p className="relative hidden xl:block">Notification</p>
        </p>
        <p className="flex justify-center items-center gap-5">
          <i className="fa-regular fa-envelope"></i>
          <p className="relative hidden xl:block">Messages</p>
        </p>
        <p className="sm:flex hidden justify-center items-center gap-5 ">
          <i className="fa-solid fa-receipt"></i>
          <p className="relative hidden xl:block ">Lists</p>
        </p>
        <p className="sm:flex hidden justify-center items-center gap-5 ">
          <i className="fa-regular fa-bookmark"></i>{" "}
          <p className="relative hidden xl:block ">BookMark</p>
        </p>
        <p className="sm:flex hidden justify-center items-center gap-5 ">
          <i className="fa-solid fa-user-group"></i>
          <p className="relative hidden xl:block ">communities</p>
        </p>
        <p className="sm:flex hidden justify-center items-center gap-5 ">
          <i className="fa-solid fa-receipt"></i>
          <p className="relative hidden xl:block ">Lists</p>
        </p>
        <p className=" sm:flex hidden justify-center items-center gap-5">
          <i className="fa-solid fa-user"></i>
          <p className="relative hidden xl:block">Profile</p>
        </p>
        <p className="sm:flex hidden justify-center items-center gap-5 ">
          <i className="fa-solid fa-bars"></i>{" "}
          <p className="relative hidden xl:block ">more</p>
        </p>

        <div className="xl:flex hidden ">
          <button className="bg-[#359BF0] xl:flex hidden rounded-full py-2 px-14 w-[92%] absolute text-[16px] ">
            Post
          </button>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Menu;
