import React, { createContext, useEffect, useRef, useState } from "react";
import Posts from "./Posts";
import Menu from "./Menu";
import PostCreation from "./PostCreation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { PostType, postReducer, setPosts } from "../Redux/postsReducer";
import { useNavigate } from "react-router-dom";
import { Root } from "react-dom/client";
import Auth from "./Auth";
// import {BiSolidHomeCircle} from "react"
// import {GrNotification} from "react"
import { postMenuContext } from "../Contexts/postMenuContext";
import RightBar from "./RightBar";
import { act } from "react-dom/test-utils";
import BrowseSection from "./BrowseSection";
import SignInBottomBar from "./SignInBottomBar";
import PostsSections from "./PostsSections";

function HomePage({ middleComponent, middleComponentName }: any) {
  const [postModal, setPostModal] = useState(false);
  const [postsX, setPostsX] = useState<any>([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  const [displayPosts, setDisplayPosts] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const forYouRef = useRef<HTMLDivElement>(null);
  const followingRef = useRef<HTMLDivElement>(null);

  const postsRedux = useSelector((state: RootState) => state.postsRedux);
  const user = useSelector((state: RootState) => state.setSigned);
  const dispatch = useDispatch();

  const isLoggedIn = localStorage.getItem("loggedUser");
  const parsed = JSON.parse(isLoggedIn!) as {
    isLogged: boolean;
    user: string;
    id: string;
  };

  async function getPosts() {
    try {
      const response = await axios.get(
        "https://twitter-clone-nm98.onrender.com/posts",
        {
          params: {
            user: "abc",
          },
        }
      );

      dispatch(setPosts(response.data));

      // setPostsX(response.data);
    } catch (err: any) {
      console.log("Error:", err.message);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  function handleEventClick(event?: any, action?: null | string) {
    if (!forYouRef.current || !followingRef.current) return;

    if (action == "for you" || action == "following") {
      setActiveTab(action);
    } else if (action === "shello") {
      setActiveTab(null);
    } else {
      return;
    }
  }
  const handleSectionClick = () => {};

  const componentName = middleComponent.type.name;
  console.log("componentNamex: ", componentName);
  console.log("midCompx: ", middleComponent);

  return (
    <div className=" grid sm:grid-cols-9 sm:grid-rows-1 grid-rows-9 h-full w-full  bg-[#15202B] dark:bg-white relative   ">
      {/* Left side*/}
      <postMenuContext.Provider value={{ postModal, setPostModal }}>
        <div className="sm:col-span-1 md:col-span-2 xl:col-span-2 row-span-3 order-2  sm:order-1 h-full relative ">
          <Menu />
        </div>

        {/* Middle  */}
        <div
          className={`
          sm:col-span-7
          ${
            middleComponentName == "PostsSections"
              ? "md:col-span-4"
              : "md:col-span-7"
          }
           row-span-8 order-1 border dark:border-gray-300 border-gray-600  sm:order-2 h-full relative w-full flex overflow-y-scroll`}
        >
          {/* <PostsSections user={user} postsRedux={postsRedux} /> */}
          {}
          {middleComponent}
        </div>

        {/* Right side */}
        {middleComponentName == "PostsSections" ? (
          <div
            onClick={handleSectionClick}
            className="sm:col-span-1 bg-[#15202B] md:col-span-2 xl:col-span-3  md:block order-3 hidden relative w-full "
          >
            <RightBar />
          </div>
        ) : (
          ""
        )}

        {!user.signed ? <SignInBottomBar /> : ""}
      </postMenuContext.Provider>
    </div>
  );
}

export default HomePage;
