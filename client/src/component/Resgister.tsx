import React from "react";

function Resgister() {
  return (
    <div className="bg-[#15202B] w-full h-[100%]">
      <div className="flex items-center justify-center h-full">
        <div className=" h-3/4 flex flex-col w-full items-start px-10 py-10 gap-2">
          <h1 className="text-white text-[20px]">Sign in to Twitter</h1>
          <button className="rounded-full bg-white py-2 w-full my-3">
            Sign in with google
          </button>
          <button className="rounded-full bg-white py-2 w-full">
            Sign in with Apple
          </button>
          <p className="border-b w-full leading-[0.1em] mx-0 mt-[10px] mb-[20px]">
            <span className="px-1 bg-[#15202B] text-white text-[20px]">or</span>
          </p>
          <div className="w-full bg-[#15202B] pt-2 p-2 flex justify-end flex-col border border-gray-600 rounded-sm">
            <p className=" text-start text-sm mb-1 text-gray-400">
              phone, email or username
            </p>
            <input placeholder="Sign in" className=" w-full px-1 " />
          </div>
          <button className=" rounded-full w-full py-1.5">Sign in</button>
          <button className=" rounded-full w-full py-1.5 bg-[#15202B] border border-gray-400 text-white mt-3">
            Forgot passWord{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resgister;
