import React from "react";
import Posts from "./Posts";
import Menu from "./Menu";
// import {BiSolidHomeCircle} from "react"
// import {GrNotification} from "react"
function HomePage() {
  return (
    <div className="bg-[#15202B] min-h-full h-auto  w-full absolute pb-12  ">
      <div className=" border-b border-gray-600 h-[7rem] relative flex justify-center gap-10 ">
        <div className="text-white bg-white rounded-[100%] h-[40px] w-[40px] absolute left-3 top-1">
          c
        </div>
        <div className="">
          <i className="fa-solid fa-dove text-white text-[24px] mt-1"></i>
        </div>
        <div
          className=" h-1/2 absolute w-1/2 bottom-0 left-0 flex justify-center items-center text-gray-400 font-bold
                        "
        >
          For you
        </div>
        <div
          className=" h-1/2 absolute bottom-0 w-1/2 right-0 flexf justify-center items-center text-gray-400 font-bold 
                        "
        >
          Following
        </div>
      </div>

      {/* Posts Are */}

      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />

      {/* Menue */}

      <Menu />
    </div>
  );
}

export default HomePage;
