import React from "react";

function RightBar() {
  return (
    <div className=" h-full w-full flex justify-start dark:bg-white ">
      <div className=" hidden md:h-full lg:h-64 xl:h-40 bg-[#1E2732] dark:bg-white dark:border w-3/4 mt-10 ml-6 rounded-2xl md:flex justify-center items-center">
        <div className=" w-[90%] h-[90%] flex flex-col gap-5 ">
          <h1 className="text-[24px] text-left text-white dark:text-black font-bold">
            Subscribe to premium
          </h1>
          <p className="text-[16px] text-left text-white dark:text-black leading-5 font-bold">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <div className=" hover:bg-[#4590cc] cursor-pointer text-white bg-[#359AEE] flex items-center justify-center rounded-full w-0 px-14 py-1.5">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
