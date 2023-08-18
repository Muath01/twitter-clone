import React, { useEffect, useRef } from "react";

function Resgister() {
  const inputRef = useRef<HTMLDivElement>(null);

  function handleDivBorder() {
    // console.log(inputRef.current?.className);
    inputRef.current!.style.borderColor = "#278CF1";
    inputRef.current!.style.borderWidth = "2px";
  }

  useEffect(() => {
    console.log("here");
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) //checks if the clicked even points at our useRef, if no then it removes the stlying.
      ) {
        console.log(inputRef.current);
        inputRef.current.style.borderColor = "#8A97A4";
        inputRef.current.style.borderWidth = "1px";
      } else {
        console.log("else: ", inputRef.current);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });
  return (
    <div className="bg-[#15202B] w-full h-[100%]">
      <div className="flex items-center justify-center h-full">
        <div className=" h-3/4 flex flex-col w-full items-start px-9 py-10  gap-2 mt-10">
          <i className="fa-brands fa-twitter text-white text-[32px] mt-2 absolute top-0 left-1/2 translate-x-[-50%] "></i>
          <button className="bg-[#15202B] text-white absolute top-3 left-5 focus:outline-none">
            <i className="fa-solid fa-x"></i>
          </button>
          <h1 className="text-white text-[24px] font-bold mb-3 ">
            Sign in to Twitter
          </h1>
          <button className="rounded-full bg-white py-2 w-full my-3 focus:outline-none">
            <i className="fa-brands fa-google mr-2"></i>Sign in with google
          </button>
          <button className="rounded-full bg-white py-2 w-full focus:outline-none">
            <i className="fa-brands fa-apple mr-2"></i> Sign in with Apple
          </button>
          <p className="border-b w-full leading-[0.1em] mx-0 mt-[10px] mb-[10px]">
            <span className="px-1 bg-[#15202B] text-white text-[20px]">or</span>
          </p>
          <div
            ref={inputRef}
            className="w-full bg-[#15202B] pt-2 p-2 flex justify-end flex-col border border-gray-600 rounded-sm"
          >
            <p className=" text-start text-sm mb-1 text-gray-400">
              phone, email or username
            </p>
            <input
              onClick={handleDivBorder}
              placeholder="Sign in"
              className=" w-full px-1 focus:outline-none outline-none  "
            />
          </div>
          <div className="mt-3 w-full">
            <button className=" rounded-full w-full py-1.5 text-black font-bold focus:outline-none">
              Next
            </button>
            <button className=" rounded-full w-full py-1.5 bg-[#15202B] border font-bold border-gray-400 text-white mt-3 focus:outline-none">
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resgister;
