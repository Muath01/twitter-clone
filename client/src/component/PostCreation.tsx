import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./HomePage";
import { useDispatch, useSelector } from "react-redux";
import { PostType, setPosts } from "../Redux/postsReducer";
import { RootState } from "../Redux/store";
import { postMenuContext } from "../Contexts/postMenuContext";
import { setComments } from "../Redux/commentsReducer";

function PostCreation({
  commentSection,
  post,
}: {
  commentSection?: boolean;
  post?: any;
}) {
  /* This bool check if the PostCreation is called
                                                                            from the comment section or the HomePage, i.e. should it 
                                                                            post a comment to the backend or a post. 
                                                                          */

  const [postContent, setPostContent] = useState("");

  const { postModal, setPostModal } = useContext(postMenuContext);

  const user = useSelector((state: RootState) => state.setSigned);

  const dispatch = useDispatch();

  async function createComment() {
    try {
      await axios.post("http://localhost:3001/comment", {
        content: postContent,
        username: user.username,
        post: post,
      });

      const response = await axios.get("http://localhost:3001/comment", {
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
      const postReq = await axios.post("http://localhost:3001/post", {
        content: postContent,
        username: user.username,
      });

      const response = await axios.get("http://localhost:3001/posts", {
        params: {
          user: "abc",
        },
      });

      await dispatch(setPosts(response.data));
    } catch (error: any) {
      console.log(error.message);
    }
  }

  // getPosts();

  return (
    <>
      <div className="h-[10rem] bg-[#15202B] dark:bg-white hidden sm:block  relative border-b  ">
        {/* <input
          type="text"
          className="bg-[#15202B] border-none bg-none absolute left-[20%] top-2 w-full focus:outline-none text-white"
          placeholder="What is happening..."
        /> */}

        <textarea
          onChange={(e) => setPostContent(e.target.value)}
          name=""
          value={postContent}
          id=""
          placeholder="What is hapenning?!"
          cols={0}
          className="bg-[#15202B] dark:bg-white dark:text-black border-none bg-none absolute left-[20%]  w-[80%] outline-none resize-none focus:outline-none text-white"
          rows={4}
        >
          {"hello"}
        </textarea>
        <button
          onClick={(e) => {
            // setLoad("load");
            setPostContent("");

            // If the commmentSection var is true, it means this is the postCreation componenet called from
            // the comments section, and thus should make a comment instead of a post
            if (commentSection) {
              createComment();
            } else {
              createPost();
            }
            // getPosts();
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
