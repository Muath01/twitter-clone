import React, { useEffect, useReducer, useRef, useState } from "react";
import BrowseSection from "./BrowseSection";
import { signedState } from "../Redux/signedReducer";
import PostCreation from "./PostCreation";
import Posts from "./Posts";
import { PostType } from "../Redux/postsReducer";

type BrowseSectionProps = {
  user: signedState;
  postsRedux: PostType[];
};

function PostsSections({ user, postsRedux }: BrowseSectionProps) {
  const [postExpanded, setPostExpanded] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>();

  const outerPostRef = useRef<HTMLDivElement>(null);
  const innerPostRef = useRef<HTMLDivElement>(null);

  console.log("po");

  function clickPost(action: any) {
    // setPostExpanded(true);
    // console.log("POST: ", post);
  }

  useEffect(() => {
    const listenForClick = (event: MouseEvent) => {
      var target = event.target as HTMLElement;

      setPost(post);

      if (
        outerPostRef.current?.contains(event.target as Node) &&
        !(
          target.tagName == "TEXTAREA"
        ) /* the text area for post creation is isnide the outerPostRef,
                                         this check helps prevent opening up a post if user tries to make 
                                         a new post
                                        */
      ) {
        setPostExpanded(true);
      } else if (!innerPostRef.current?.contains(event.target as Node)) {
        setPostExpanded(false);
      }
    };

    document.addEventListener("click", listenForClick);
    return () => {
      document.removeEventListener("click", listenForClick);
    };
  });

  return (
    <>
      {!postExpanded ? (
        <div
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
                setPostExpanded={setPostExpanded}
                postExpanded={postExpanded}
                setPost={setPost}
              />
            ))}
        </div>
      ) : (
        <div
          ref={innerPostRef}
          className="bg-[#15202B] min-h-full h-auto  w-full absolute pb-12 "
        >
          <BrowseSection user={user} />
          {/* The profile header and the for you & following tbas */}
          {
            <Posts
              // key={key}
              post={post}
              postExpanded={postExpanded}
              setPostExpanded={setPostExpanded}
              setPost={setPost}
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
            <Posts
              post={post}
              postExpanded={false}
              //   setPostExpanded={setPostExpanded}
              setPost={setPost}
            />
          </div>
          <div className=" w-full flex flex-col">
            <Posts
              post={post}
              postExpanded={false}
              //   setPostExpanded={setPostExpanded}
              setPost={setPost}
            />
          </div>
          <div className=" w-full flex flex-col">
            <Posts
              post={post}
              postExpanded={false}
              //   setPostExpanded={setPostExpanded}
              setPost={setPost}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PostsSections;
