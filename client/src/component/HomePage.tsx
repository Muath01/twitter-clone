import React, { createContext, useEffect, useRef, useState } from "react";
import Posts from "./Posts";
import Menu from "./Menu";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setPosts } from "../Redux/postsReducer";
import { useActionData, useNavigate } from "react-router-dom";
import { postMenuContext } from "../Contexts/postMenuContext";
import RightBar from "./RightBar";
import SignInBottomBar from "./SignInBottomBar";
import { useAuth } from "../Contexts/AuthContext";
import { apiUrl } from "../utilities/path";
import PostsSections from "./PostsSections";
function HomePage({ middleComponent, middleComponentName }: any) {
  const [postModal, setPostModal] = useState(false);
  const dispatch = useDispatch();
  const { currentUser }: any = useAuth();

  async function getPosts() {
    try {
      const response = await axios.get(`${apiUrl}/posts`, {
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
          <div className="sm:col-span-1 bg-[#15202B] md:col-span-2 xl:col-span-3  md:block order-3 hidden relative w-full ">
            <RightBar />
          </div>
        ) : (
          ""
        )}

        {!currentUser ? <SignInBottomBar /> : ""}
      </postMenuContext.Provider>
    </div>
  );
}

export default HomePage;
