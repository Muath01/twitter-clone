import React from "react";
import { useNavigate } from "react-router-dom";

function SignInBottomBar() {
  const navigate = useNavigate();
  return (
    <div className=" bg-sky-500 fixed bottom-0 w-full h-[10%] flex justify-center items-center z-[11] ">
      <div className="relative xl:right-44 sm:right-28 sm:block hidden   ">
        <p className="text-white text-[28px] font-bold  ">
          Don't miss on What's happening!
        </p>
        <p className="text-white text-[20px] text-left">
          People on here are first to know
        </p>
      </div>
      <div className="flex gap-2 absolute md:right-10 sm:right-0 justify-between sm:justify-center sm:w-64   ">
        <button
          onClick={(e) => {
            navigate("/auth");
          }}
          className=" rounded-full sm:w-20 sm:h-10 w-[10rem] h-[2.4rem] bg-sky-500 border text-white border-gray-400 hover:border-gray-400 hover:brightness-95 "
        >
          Login
        </button>
        <button
          onClick={(e) => {
            navigate("/register");
          }}
          className="border-none rounded-full sm:w-20 sm:h-10 w-[10rem] h-[2.4rem] font-bold hover:bg-gray-200"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignInBottomBar;
