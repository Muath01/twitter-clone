import React, { createContext, useEffect, useState } from "react";
import Posts from "./Posts";
import Menu from "./Menu";
import PostCreation from "./PostCreation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { PostType, setPosts } from "../Redux/postsReducer";
import { useNavigate } from "react-router-dom";
import { Root } from "react-dom/client";
// import {BiSolidHomeCircle} from "react"
// import {GrNotification} from "react"

function HomePage() {
  const [postsX, setPostsX] = useState<any>([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

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

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className=" grid sm:grid-cols-9 sm:grid-rows-1 grid-rows-9 h-full w-full  bg-[#15202B]  ">
      {/* menu */}
      <div className="sm:col-span-1 md:col-span-2 xl:col-span-2 row-span-3 order-2 sm:order-1 h-full sticky  ">
        <Menu />
      </div>

      {/* Posts */}
      <div className="sm:col-span-7 md:col-span-5 xl:col-span-4 row-span-8 order-1 sm:order-2 h-full relative w-full flex overflow-y-scroll   ">
        <div className="bg-[#15202B]  min-h-full h-auto  w-full absolute pb-12">
          <div className=" border-b border-gray-600 h-[7rem] relative flex justify-center gap-10 ">
            <div className="text-white bg-white rounded-[100%] h-[40px] w-[40px] absolute left-3 top-1">
              c<p className="bg-red-400 ml-10 ">{user.username}</p>
            </div>
            <div className="">
              <i className="fa-brands fa-twitter text-white text-[24px] mt-1  "></i>
            </div>
            <div
              className=" h-1/2 absolute w-1/2 bottom-0 left-0 flex justify-center items-center text-gray-400 font-bold
              "
            >
              For you
            </div>
            <div
              className=" h-1/2 absolute bottom-0 w-1/2 right-0 flex justify-center items-center text-gray-400 font-bold 
              "
            >
              Following
            </div>
          </div>
          <PostCreation />

          {postsRedux
            .slice(0)
            .reverse()
            .map((post: any, key: any) => (
              <Posts
                key={key}
                post={post}
                // content={post.content}
                // username={post.username}
              />
            ))}
        </div>
      </div>

      {/* Right side */}
      <div className="sm:col-span-1 md:col-span-2 xl:col-span-3 sm:block order-3 hidden bg-black relative w-full">
        <div className="bg-[#15202B] min-h-full h-auto  w-full absolute pb-12 border-2    ">
          {/* <Posts /> */}
        </div>
      </div>

      {!user.signed ? (
        <div className=" bg-sky-500 fixed bottom-0 w-full h-[10%] flex justify-center items-center ">
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
      ) : (
        ""
      )}
    </div>
  );
}

export default HomePage;
