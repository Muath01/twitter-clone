import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setPosts } from "../Redux/postsReducer";
import { useNavigate } from "react-router-dom";

function Posts({ post }: any) {
  const user = useSelector((state: RootState) => state.setSigned);
  const poster = useSelector((state: RootState) => state.postsRedux);
  const navigate = useNavigate();
  const [hello, setHello] = useState("");
  const dispatch = useDispatch();

  async function likePost(e: any) {
    if (!user.signed) {
      // if user attempts to like whilst not logged in, direct them to the login section
      navigate("/auth");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/like", {
        id: post._id,
        username: user.username, //user likes and username
      });

      await dispatch(setPosts(response.data.post));
    } catch (err: any) {
      console.log("error", err.message);
    }
  }

  // const liked = post.likedBy.some((item: any) => item._id == user._id);
  const [liked, setLiked] = useState(
    // user._id &&
    // post.likeBy &&
    post.likedBy.some((item: any) => item._id === user._id)
  );
  // const liked =
  // user._id &&
  // post.likeBy &&
  //   post.likedBy.some((item: any) => item._id === user._id);

  // console.log("user: ", user);
  // console.log("post: ", post.likedBy);

  useEffect(() => {
    // user._id &&
    // post.likeBy &&
    setLiked(post.likedBy.some((item: any) => item._id === user._id));
  }, [post.likedBy, user._id]);

  return (
    <div className="border-b bg-[#15202B]  dark:bg-white dark:text-black hover:bg-[#162431] dark:border-gray-300 border-gray-600 min-h-[15%] w-full h-auto  relative cursor-pointer flex flex-col gap-2 items-center justify-end pt-8 pb-[1.5rem] ">
      <div className=" absolute left-2 top-2 flex gap-2     text-white h-auto w-1/2">
        <div className="w-[40px] h-[40px] rounded-[100%] bg-white dark:bg-black relative "></div>
        <p>{post.username}</p>
      </div>
      <div className="text-left w-4/5 h-auto justify-self-end left-5 relative">
        {post.content}
      </div>
      <div className="flex  w-4/5 relative  justify-end left-6 items-center gap-10 text-[20px] text-gray-400 flex-row-reverse ">
        <i
          onClick={(e) => {
            setHello("he");
            likePost(e);
          }}
          className={`fa-regular fa-heart flex  items-start relative justify-center cursor-pointer hover:text-red-600  ${
            liked ? "text-red-600" : ""
          }`}
        >
          <span className="text-xs ml-3  ">
            {post.likes < 1 ? "" : post.likes}
          </span>
        </i>
        <i className="fa-solid fa-retweet"></i>
        <i className="fa-regular fa-comment"></i>{" "}
      </div>
    </div>
  );
}

export default Posts;
