import React from "react";

function DarkMode() {
  return (
    <div className="flex justify-center gap-10">
      <h1 className="">Background</h1>
      <button className="py-2 px-10 bg-blue-600 rounded-md text-black">
        Light
      </button>
      <button className="py-2 px-10 bg-blue-600 rounded-md  text-black">
        Dark
      </button>
    </div>
  );
}

export default DarkMode;
