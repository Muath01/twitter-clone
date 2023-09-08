import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setDisplay } from "../Redux/displayReducer";

function DarkMode() {
  const { darkMode } = useSelector((state: RootState) => state.displayRedux);
  const dispatch = useDispatch();

  function changeDisplay(action: string) {
    if (action === "dark") {
      dispatch(setDisplay(true));
    } else {
      dispatch(setDisplay(false));
    }
  }

  return (
    <div className="flex flex-col justify-end  h-full gap-4 relative w-full">
      <h1 className="text-left text-[30px]">Background</h1>
      <div className="flex gap-10 justify-center sm:flex-row flex-col  items-center">
        <button
          onClick={(e) => changeDisplay("dark")}
          className="py-2 px-10  bg-white focus:outline-none border-black border rounded-md  text-black w-1/3 flex justify-center items-center "
        >
          light
        </button>
        <button
          onClick={(e) => changeDisplay("light")}
          className="py-2 text-white  px-10 bg-[#15202B] focus:outline-none hover:outline-none hover:border-white hover:bg-[#0f1923] border rounded-md w-1/3 flex justify-center items-center"
        >
          dark
        </button>
      </div>
    </div>
  );
}

export default DarkMode;
