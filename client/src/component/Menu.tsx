import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSigned } from "../Redux/signedReducer";
import { RootState } from "../Redux/store";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.setSigned);

  const menuItems = [
    { section: "Home", icon: "fa-solid fa-house-chimney-window" },
    { section: "Explore", icon: "fa-solid fa-magnifying-glass" },
    { section: "Notification", icon: "fa-regular fa-bell" },
    { section: "Messages", icon: "fa-regular fa-envelope" },
    { section: "Lists", icon: "fa-solid fa-receipt", class: "sm:flex hidden" },
    {
      section: "BookMark",
      icon: "fa-regular fa-bookmark",
      class: "sm:flex hidden",
    },
    {
      section: "communities",
      icon: "fa-solid fa-user-group",
      class: "sm:flex hidden",
    },
    { section: "Profile", icon: "fa-solid fa-user", class: "sm:flex hidden" },
    { section: "more", icon: "fa-solid fa-bars", class: "sm:flex hidden" },
  ];
  return (
    <div
      className=" text-white fixed z-10
                  bottom-0 w-full h-[10%] flex justify-between bg-[#15202B] shadow-lg text-[24px]  py-6 border-gray-600
                   sm:w-[100%]   sm:flex-col 
                  sm:relative sm:h-[100%] 
                  border md:items-end
       "
    >
      <div className=" xl:text-[20px] text-[25px] flex justify-around items-center  w-full relative  h-full sm:flex-col sm:gap-[1rem]  md:gap-3 xl:gap-2 xl:items-start  md:w-3/5  sm:items-center sm:justify-start ">
        <div className="xl:flex justify-center items-center gap-5 hidden">
          <i
            onClick={(e) => {
              navigate("/");
            }}
            className="fa-brands fa-twitter text-white text-[24px] mt-1  "
          ></i>
        </div>
        {menuItems.map((item) => (
          <p
            className={`${item.class} flex justify-center xl:justify-start items-center  hover:bg-[#142436] hover:rounded-full px-2 cursor-pointer sm:w-full sm:py-2 gap-5`}
          >
            <i className={item.icon}></i>
            <p className="relative hidden xl:block ">{item.section}</p>
          </p>
        ))}

        <div className="xl:flex hidden flex-col   ">
          <button className="bg-[#359BF0] xl:flex justify-center items-center hidden rounded-full py-2 px-14 w-[92%] absolute text-[16px] ">
            Post
          </button>
        </div>
        <div className="xl:block hidden absolute bottom-0  w-full right-3  ">
          {showMenu ? (
            <div className="bg-[#15202B] cursor-pointer  border border-gray-600 rounded-e-xl relative bottom-2 h-40  ">
              <p
                onClick={(e) => {
                  let whoLogged = { isLogged: false, user: "" };
                  let whoLoggedObjectString = JSON.stringify(whoLogged);
                  localStorage.setItem("loggedUser", whoLoggedObjectString);
                  location.reload();
                }}
                className=" text-white absolute hover:bg-[#131e29] hover:rounded-lg bottom-1 w-full rounded-xl h-10 flex items-center justify-center cursor-pointer"
              >
                Log out
              </p>
            </div>
          ) : (
            ""
          )}
          <div
            onClick={(e) => setShowMenu(!showMenu)}
            className="w-full bg-[#15202B] cursor-pointer hover:bg-[#131e29] rounded-3xl py-2 relative flex justify-start items-center "
          >
            <p className=" rounded-full bg-white p-6 relative left-2 "></p>
            <div className="relative left-3 top-1 ">{user.username}</div>
            <i className="fa-solid fa-ellipsis absolute right-0 top-1/2 translate-y-[-20%] "></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
