import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./HomePage";
import { useDispatch, useSelector } from "react-redux";
import { PostType, setPosts } from "../Redux/postsReducer";
import { RootState } from "../Redux/store";
import { postMenuContext } from "../Contexts/postMenuContext";
import { setComments } from "../Redux/commentsReducer";
import { useAuth } from "../Contexts/AuthContext";
import { apiUrl } from "../utilities/path";

function PostCreation({
  commentSection,
  post,
}: {
  commentSection?: boolean;
  post?: any;
}) {
  const [postContent, setPostContent] = useState("");

  const { postModal, setPostModal } = useContext(postMenuContext);
  const { currentUser }: any = useAuth();

  const dispatch = useDispatch();

  async function createComment() {
    try {
      console.log("created a commment");
      await axios.post(`${apiUrl}/comments`, {
        content: postContent,
        username: "me",
        post: post,
      });

      const response = await axios.get(`${apiUrl}/comments`, {
        params: {
          postId: post._id,
        },
      });

      dispatch(setComments(response.data));
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function createPost() {
    setPostModal(false);
    try {
      const postReq = await axios.post(`${apiUrl}/posts`, {
        content: postContent,
        username: currentUser.displayName,
      });
      await dispatch(setPosts(postReq.data));
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="h-[10rem] bg-[#15202B]  dark:bg-white block  relative border-b  ">
        <textarea
          onChange={(e) => setPostContent(e.target.value)}
          name=""
          value={postContent}
          id=""
          placeholder="What is hapenning?!"
          cols={0}
          className="bg-[#15202B] dark:bg-white  dark:text-black border-none bg-none absolute left-[20%]  w-[80%] outline-none resize-none focus:outline-none text-white"
          rows={4}
        >
          {"hello"}
        </textarea>
        <button
          onClick={(e) => {
            setPostContent("");
            if (commentSection) {
              createComment();
            } else {
              createPost();
            }
          }}
          className={`absolute right-2 text-white bottom-2  px-5 py-2 rounded-full ${
            postContent != "" ? "bg-[#359BF0]" : "bg-[#8ECBF6]"
          }`}
        >
          Post
        </button>
      </div>
    </>
  );
}

export default PostCreation;
