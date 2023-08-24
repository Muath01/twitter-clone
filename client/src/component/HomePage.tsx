import React, { createContext, useEffect, useRef, useState } from "react";
import Posts from "./Posts";
import Menu from "./Menu";
import PostCreation from "./PostCreation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { PostType, setPosts } from "../Redux/postsReducer";
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

function HomePage() {
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
      const response = await axios.get("http://localhost:3001/posts", {
        params: {
          user: "abc",
        },
      });

      dispatch(setPosts(response.data));

      // setPostsX(response.data);
    } catch (err: any) {
      console.log("Error:", err.message);
    }
  }
  console.log("r", postsRedux[0]);

  useEffect(() => {
    console.log("HomePage");
    getPosts();
  }, []);

  // function handleEventClick(event?: any, action?: null | string) {
  //   if (!forYouRef.current || !followingRef.current) return;
  //   if (event && action) {
  //     if (followingRef.current.contains(event.target as Node)) {
  //       console.log("inside");
  //       setActiveTab(action);
  //     } else if (forYouRef.current.contains(event.target as Node)) {
  //       setActiveTab(action);
  //       console.log("inside");
  //     }
  //   } else if (s) {
  //     setActiveTab(null);
  //     // console.log(first)
  //     console.log("outside");
  //   }
  // }
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

  return (
    <div
      onClick={(e) => handleEventClick(e, "hello")}
      className=" grid sm:grid-cols-9 sm:grid-rows-1 grid-rows-9 h-full w-full  bg-[#15202B] relative   "
    >
      <postMenuContext.Provider value={{ postModal, setPostModal }}>
        <div className="sm:col-span-1 md:col-span-2 xl:col-span-2 row-span-3 order-2  sm:order-1 h-full relative ">
          <Menu />
        </div>

        {/* Posts */}

        <div className="sm:col-span-7 md:col-span-5 xl:col-span-4 row-span-8 order-1 border-r border-gray-600 sm:order-2 h-full relative w-full flex overflow-y-scroll   ">
          <div className="bg-[#15202B]  min-h-full h-auto  w-full absolute pb-12">
            <BrowseSection user={user} />{" "}
            {/* The profile header and the for you & following tbas */}
            {user.signed ? <PostCreation /> : ""}
            {postsRedux
              .slice(0)
              .reverse()
              .map((post: any, key: any) => (
                <Posts key={key} post={post} />
              ))}
          </div>
        </div>

        {/* Right side */}
        <div
          onClick={handleSectionClick}
          className="sm:col-span-1 bg-[#15202B] md:col-span-2 xl:col-span-3 sm:block order-3 hidden  relative w-full "
        >
          <RightBar />
        </div>

        {!user.signed ? <SignInBottomBar /> : ""}
      </postMenuContext.Provider>
    </div>
  );
}

export default HomePage;
