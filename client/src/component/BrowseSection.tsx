import { useState } from "react";
import Settings from "./Settings";
import { useAuth } from "../Contexts/AuthContext";

const BrowseSection: React.FC<{}> = () => {
  const [activeTab, setActiveTab] = useState<boolean>(true);
  const { currentUser }: any = useAuth();

  const [settingsModal, setSettingsModal] = useState<boolean>(true);

  function openSetting() {
    setSettingsModal(!settingsModal);
  }

  return (
    <div className=" border-b dark:border-gray-300 border-gray-600 h-[7rem] relative flex justify-center gap-10 dark:bg-white ">
      <div className=" flex z-20 ">
        <div className="text-white bg-white dark:bg-gray-300 rounded-[100%] h-[40px] w-[40px] absolute left-3 top-4 flex border-2 ">
          <i
            onClick={openSetting}
            className="fa-regular  fa-user text-black dark:text-white text-[24px] relative top-[15%] left-2 text-center flex justify-center select-none cursor-pointer "
          ></i>
          <p className=" ml-5 mt-2  select-none">
            {" "}
            {currentUser && currentUser.displayName}
          </p>
        </div>
      </div>
      <div className="">
        <i className="fa-brands fa-twitter text-white text-[24px] mt-1  "></i>
      </div>
      <div
        className={`h-1/2 absolute w-1/2 bottom-0 left-0 flex justify-center items-center text-gray-400 font-bold hover:bg-[#192d3d] dark:hover:bg-[#ececec] cursor-pointer
    
    
    `}
        onClick={(e) => {
          setActiveTab(true);
        }}
      >
        <p className={`${activeTab ? "border-b-2 border-[#359AEE]" : ""}  `}>
          For you
        </p>
      </div>
      <div
        className={` h-1/2 absolute bottom-0 w-1/2 right-0 flex justify-center items-center text-gray-400 font-bold  hover:bg-[#192d3d] dark:hover:bg-[#ececec] cursor-pointer
   
    `}
        onClick={(e) => {
          setActiveTab(false);
        }}
      >
        <p className={`${!activeTab ? "border-b-2 border-[#359AEE]" : ""} `}>
          Following
        </p>
      </div>
      {settingsModal && (
        <div className="border-4 w-full overflow-scroll h-[350%] bg-slate-800 z-10 flex sm:hidden   absolute text-white dark:bg-white ">
          <div className=" z-0 flex relative top-20 ">
            <Settings />
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseSection;
