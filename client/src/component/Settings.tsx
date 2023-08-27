import React, { useState } from "react";
import DarkMode from "./DarkMode";

function Settings() {
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  const [displayedSetting, setDisplayedSetting] = useState<
    string | JSX.Element
  >();
  const menuItems = [
    {
      section: "Personalisation and data",
      settings:
        "  These settings arent available because they apply to non-essential cookies. Since youve already opted out of those, were only usingcookies that collect necessary data from your device.",
    },
    {
      section: "Your twitter data",
      settings:
        "  These settings arent available because they apply to non-essential cookies. Since youve already opted out of those, were only usingcookies that collect necessary data from your device.",
    },
    {
      section: "cookies prefrence",
      note: "manage your cookie experience on twitter",
      settings:
        "  These settings arent available because they apply to non-essential cookies. Since youve already opted out of those, were only usingcookies that collect necessary data from your device.",
    },
    {
      section: "Additional resource",
      settings:
        "  These settings arent available because they apply to non-essential cookies. Since youve already opted out of those, were only usingcookies that collect necessary data from your device.",
    },
    {
      section: "Display",
      settings: <DarkMode />,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 w-[40%] h-full dark:text-black ">
        <div className="flex flex-col  ml-2 mt-2  h-[57%] ">
          <h1 className=" text-white text-[28px] text-left mb-10 font-bold dark:text-black ">
            Settings
          </h1>
          <h1 className="text-left text-white text-[28px] mb-3 dark:text-black">
            Privacy
          </h1>
          {menuItems.slice(0, 3).map((item) => (
            <p
              onClick={(e) => {
                setSelectedMenu(item.section);
                setDisplayedSetting(item.settings as string | JSX.Element);
              }}
              className={`
          ${
            selectedMenu == item.section
              ? "border-r-[3px] border-[#359AEE]"
              : ""
          }
          px-2 hover:bg-[#192d3d] dark:hover:bg-[#ececec] dark:text-black cursor-pointer text-left py-3 text-white text-[20px]  flex justify-between items-center`}
            >
              <span className="flex flex-col">
                {item.section}
                <span className="text-[12px] ml-2 text-gray-600">
                  {item.note}
                </span>
              </span>
              <i
                className={`fa-solid fa-chevron-right relative  
            `}
              ></i>
            </p>
          ))}
          <p className="text-left text-white  dark:text-black mt-10">
            These settings apply to this browser or device while you’re logged
            out. They don’t have any effect when you’re logged in.
          </p>
        </div>
        <div className="border-t  w-full">
          <h1 className=" text-white dark:text-black text-[22px] text-left mb-10  ml-2 mt-2 ">
            General
          </h1>
          {menuItems.slice(-2).map((item) => (
            <p
              onClick={(e) => {
                setSelectedMenu(item.section);
                setDisplayedSetting(item.settings as string | JSX.Element);
              }}
              className={`
          ${
            selectedMenu == item.section
              ? "border-r-[3px] border-[#359AEE] "
              : ""
          }
          px-2 hover:bg-[#192d3d] dark:hover:bg-[#ececec] dark:text-black cursor-pointer text-left py-3 text-white text-[20px]  flex justify-between items-center`}
            >
              <span className="flex flex-col">
                {item.section}
                <span className="text-[12px] ml-2 text-gray-600">
                  {item.note}
                </span>
              </span>
              <i
                className={`fa-solid fa-chevron-right relative  
            `}
              ></i>
            </p>
          ))}
        </div>
      </div>

      <div className=" w-[60%] h-full ">
        <h1 className=" text-white dark:text-black text-[22px] text-left mb-10  ml-3 mt-3 ">
          {selectedMenu}
        </h1>
        <div className="relative  w-full">
          <h1 className="text-white  text-[26px] text-middle mb-10  ml-3 mt-3 ">
            {selectedMenu != "Display" && selectedMenu != ""
              ? "Settings are unavailable"
              : ""}
          </h1>
          <p className="text-white dark:text-black h-full  w-full">
            {displayedSetting as string | JSX.Element}
          </p>
        </div>
      </div>
    </>
  );
}

export default Settings;
