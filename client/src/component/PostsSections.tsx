import React, { useEffect, useReducer, useRef, useState } from "react";
import BrowseSection from "./BrowseSection";
import { signedState } from "../Redux/signedReducer";
import PostCreation from "./PostCreation";
import Posts from "./Posts";
import { PostType } from "../Redux/postsReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setComments } from "../Redux/commentsReducer";
import axios from "axios";

type BrowseSectionProps = {
  user: signedState;
  postsRedux: PostType[];
};

function PostsSections({ user, postsRedux }: BrowseSectionProps) {
  const [postExpanded, setPostExpanded] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>();

  const outerPostRef = useRef<HTMLDivElement>(null);
  const innerPostRef = useRef<HTMLDivElement>(null);

  //comments from redux

  const comments = useSelector((state: RootState) => state.commentsRedux);
  const dispatch = useDispatch();

  function clickPost(action: any) {
    // setPostExpanded(true);
    // console.log("POST: ", post);
  }
  async function getComments() {
    try {
      const response = await axios.get("http://localhost:3001/comment", {
        params: {
          postId: post?._id,
        },
      });

      dispatch(setComments(response.data));
    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    const listenForClick = (event: MouseEvent) => {
      var target = event.target as HTMLElement;

      setPost(post);

      console.log("target2: ", target);
      console.log("target: ", target.tagName);

      if (
        outerPostRef.current?.contains(event.target as Node) &&
        target.id == "post"
      ) {
        setPostExpanded(true);
        getComments();
      } else if (!innerPostRef.current?.contains(event.target as Node)) {
        setPostExpanded(false);
      }
    };

    document.addEventListener("click", listenForClick);
    return () => {
      document.removeEventListener("click", listenForClick);
    };
  });

  console.log("post creationxx");

  return (
    <>
      {!postExpanded ? (
        <div
          id="one"
          ref={outerPostRef}
          className="bg-[#15202B] min-h-full h-auto  w-full absolute pb-12"
        >
          <BrowseSection user={user} />
          {/* The profile header and the for you & following tbas */}
          {user.signed ? <PostCreation /> : ""}
          {postsRedux
            .slice(0)
            .reverse()
            .map((post: any, key: any) => (
              <Posts
                key={key}
                post={post}
                setPost={setPost}
                setPostExpanded={setPostExpanded}
                postExpanded={postExpanded}
              />
            ))}
        </div>
      ) : (
        <div
          id="here"
          ref={innerPostRef}
          className="bg-[#15202B] min-h-full h-auto  w-full absolute pb-12 "
        >
          <BrowseSection user={user} />
          {/* The profile header and the for you & following tbas */}
          {
            <Posts
              post={post}
              setPost={setPost}
              postExpanded={postExpanded}
              setPostExpanded={setPostExpanded}
            />
          }
          <div className="h-40 w-full ">
            {/* <button className="absolute right-5 bottom-5 px-4 py-2 rounded-full bg-[#359BF0] text-white">
                Post
              </button> */}

            {/* This function will send a post request to comment path and add content of text area to comment arr */}
            <PostCreation commentSection={true} post={post} />
          </div>

          {/* This div will map all the comments made on the post, i.e. the comments found on the post array */}
          <div className=" w-full flex flex-col">
            {comments
              .slice(0)
              .reverse()
              .map((comment: any, key: any) => (
                <Posts
                  key={key}
                  post={comment}
                  setPostExpanded={setPostExpanded}
                  postExpanded={postExpanded}
                  setPost={setPost}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PostsSections;
