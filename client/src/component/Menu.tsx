import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { useNavigate } from "react-router-dom";
import PostCreation from "./PostCreation";
import { postMenuContext } from "../Contexts/postMenuContext";
import { useAuth } from "../Contexts/AuthContext";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const { currentUser, logout }: any = useAuth();
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  const { postModal, setPostModal } = useContext(postMenuContext);

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
      section: "Communities",
      icon: "fa-solid fa-user-group",
      class: "sm:flex hidden",
    },
    { section: "Profile", icon: "fa-solid fa-user", class: "sm:flex hidden" },
    {
      section: "settings",
      icon: "fa-solid fa-bars",
      class: "sm:flex hidden",
    },
  ];

  function makeAPost() {
    if (currentUser) {
      setPostModal(!postModal);
    } else {
      navigate("/auth");
    }
  }

  function handleLogout() {
    try {
      logout();
    } catch (error) {
      console.error("couldn't log out");
    }
  }
  return (
    <div
      className=" text-white fixed z-10 
                  bottom-0 w-full h-[10%] flex justify-between bg-[#15202B]  text-[24px] 
                   sm:w-[100%]   sm:flex-col 
                  sm:relative sm:h-[100%] 
                   md:items-end dark:bg-white
       "
    >
      <div className=" xl:text-[20px] text-[25px] flex justify-around items-center  w-full relative  h-full sm:flex-col sm:gap-[1rem]  md:gap-3 xl:gap-2 xl:items-start  md:w-3/5  sm:items-center sm:justify-start ">
        <div className="xl:flex justify-center items-center gap-5 hidden">
          <i
            onClick={(e) => {
              navigate("/");
            }}
            className="fa-brands fa-twitter text-white dark:text-black text-[24px] mt-1  "
          ></i>
        </div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={(e) => {
              setSelectedMenu(item.section);
              switch (item.section) {
                case "settings":
                  navigate("/settings");
                  break;
                case "Notification":
                  navigate("/notifications");
                  break;
                case "Messages":
                  navigate("/messages");
                  break;
                case "Lists":
                  navigate("/lists");
                  break;
                case "BookMark":
                  navigate("/bookmarks");
                  break;
                case "Communities":
                  navigate("/communities");
                  break;
                case "Profile":
                  navigate("/profile");
                  break;
                default:
                  navigate("/");
              }
            }}
            className={`${item.class} ${
              item.section == selectedMenu ? "text-[21px] font-bold " : ""
            } flex justify-center xl:justify-start items-center bg-[#15202B]  hover:bg-[#142436] dark:bg-white dark:hover:bg-[#ececec] dark:text-black hover:rounded-full px-2 cursor-pointer sm:w-full sm:py-2 gap-5`}
          >
            <i className={item.icon}></i>
            <p className="relative hidden xl:block ">{item.section}</p>
          </div>
        ))}

        <div className="xl:flex  flex-col relative md:right-8 xl:right-0  ">
          <button
            onClick={(e) => makeAPost()}
            className="bg-[#359BF0] xl:flex  justify-center items-center  rounded-full md:py-2  md:px-20 md:w-full px-4 py-5 sm:relative absolute sm:right-2 right-4 sm:bottom-0 bottom-20 text-[16px] "
          >
            Post
          </button>
        </div>
        <div className="xl:block hidden absolute bottom-0  w-full right-3  ">
          {showMenu ? (
            <div className="bg-[#15202B] dark:bg-white text-black cursor-pointer  border border-gray-600 rounded-e-xl relative bottom-2 h-40  ">
              <p
                onClick={handleLogout}
                className=" text-white dark:text-black dark:hover:bg-slate-200 absolute hover:bg-[#131e29] hover:rounded-lg bottom-1 w-full rounded-xl h-10 flex items-center justify-center cursor-pointer"
              >
                Log out
              </p>
            </div>
          ) : (
            ""
          )}
          <div
            onClick={(e) => setShowMenu(!showMenu)}
            className="w-full  bg-[#15202B] dark:hover:bg-slate-200 mb-1 dark:bg-white dark:text-black dark:border dark:border-gray-400 cursor-pointer hover:bg-[#131e29] rounded-3xl py-2 relative flex justify-start items-center "
          >
            <p className=" rounded-full bg-white p-6 dark:bg-black relative left-2 "></p>
            <div className="relative left-3 top-1 ">
              {currentUser && currentUser.displayName}
            </div>
            <i className="fa-solid fa-ellipsis absolute right-2 top-1/2 translate-y-[-20%] "></i>
          </div>
        </div>
      </div>

      {postModal && (
        <div className="fixed flex justify-center items-center bg  border-white w-full h-full left-[0rem]   bottom-0  bg-black place-items-center bg-opacity-70   ">
          <div className="relative sm:w-1/2 sm:h-1/2 w-4/5 h-2/5 rounded-xl bg-black">
            <PostCreation />
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
