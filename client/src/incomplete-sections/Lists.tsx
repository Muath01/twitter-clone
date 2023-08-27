import React from "react";
import { useNavigate } from "react-router-dom";

function Lists() {
  const navigate = useNavigate();
  return (
    <div className=" w-full flex justify-center h-1/2 items-center flex-col gap-20">
      <h1 className="text-white dark:text-black text-[24px] ">
        This page does not exist, try searching for something else
      </h1>
      <button
        onClick={(e) => {
          navigate("/");
          // getPosts();
        }}
        className={` right-2 text-white bottom-2  px-16 py-4 rounded-full 
             bg-[#359BF0]
          `}
      >
        Search...
      </button>{" "}
    </div>
  );
}

export default Lists;
