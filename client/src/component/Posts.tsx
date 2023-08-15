import React from "react";

function Posts() {
  return (
    <div className="border-b border-gray-600 min-h-[15%] h-auto relative flex flex-col gap-2 items-center justify-end pt-8 pb-2 ">
      <div className=" absolute left-2 top-2 flex gap-2     text-white h-auto w-1/2">
        <div className="w-[40px] h-[40px] rounded-[100%] bg-white relative "></div>
        <p>User Name</p>
      </div>
      <div className="text-left w-4/5 h-auto justify-self-end left-5 relative">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ea.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ea.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ea.
        nostrum.{" "}
      </div>
      <div className="flex  w-4/5 relative  justify-end left-6 items-center gap-10 text-[20px] text-gray-400 flex-row-reverse ">
        <i className="fa-regular fa-heart "></i>
        <i className="fa-solid fa-retweet"></i>
        <i className="fa-regular fa-comment"></i>{" "}
      </div>
    </div>
  );
}

export default Posts;
