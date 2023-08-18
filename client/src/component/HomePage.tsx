import React, { createContext, useEffect, useState } from "react";
import Posts from "./Posts";
import Menu from "./Menu";
import PostCreation from "./PostCreation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { PostType, setPosts } from "../Redux/postsReducer";
// import {BiSolidHomeCircle} from "react"
// import {GrNotification} from "react"

function HomePage() {
  const [postsX, setPostsX] = useState<any>([]);
  const [load, setLoad] = useState(true);

  const postsRedux = useSelector((state: RootState) => state.postsRedux);
  const dispatch = useDispatch();

  // console.log("PostRedux: ", postsRedux);
  async function getPosts() {
    // console.log("here");
    try {
      const response = await axios.get("http://localhost:3001/posts", {
        params: {
          user: "abc",
        },
      });

      // console.log("DAta: ", response);
      // console.log("AFTER GET");

      dispatch(setPosts(response.data));

      // setPostsX(response.data);
    } catch (err: any) {
      console.log("Error:", err.message);
    }
  }
  // console.log("STATE:", postsRedux);

  useEffect(() => {
    getPosts();
    // console.log("USEEFFECT!");
  }, []);

  return (
    <>
      <div className=" grid sm:grid-cols-9 sm:grid-rows-1 grid-rows-9 h-full w-full border-10 border-pink-500 bg-[#15202B] absolute ">
        {/* menu */}
        <div className="sm:col-span-1 md:col-span-2 xl:col-span-2 row-span-3 order-2 sm:order-1 h-full sticky  ">
          <Menu />
        </div>

        {/* Posts */}
        <div className="sm:col-span-7 md:col-span-5 xl:col-span-4 row-span-8 order-1 sm:order-2 h-full relative w-full flex overflow-y-scroll   ">
          <div className="bg-[#15202B]  min-h-full h-auto  w-full absolute pb-12">
            <div className=" border-b border-gray-600 h-[7rem] relative flex justify-center gap-10 ">
              <div className="text-white bg-white rounded-[100%] h-[40px] w-[40px] absolute left-3 top-1">
                c
              </div>
              <div className="">
                <i className="fa-solid fa-dove text-white text-[24px] mt-1"></i>
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
                <Posts key={key} content={post.content} />
              ))}
          </div>
        </div>

        {/* Right side */}
        <div className="sm:col-span-1 md:col-span-2 xl:col-span-3 sm:block order-3 hidden bg-black relative w-full">
          <div className="bg-[#15202B] min-h-full h-auto  w-full absolute pb-12 border   ">
            {/* <Posts /> */}
          </div>
        </div>

        {/* Posts Are */}
        {/* <div className=" flex flex-row-reverse"> */}
        {/* <div className=""> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default HomePage;
