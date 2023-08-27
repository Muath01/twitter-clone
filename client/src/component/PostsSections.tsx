import React, { useState } from "react";
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
  const [post, setPost] = useState();

  function clickPost(post: any) {
    console.log("clicked post: ", postExpanded);
    setPost(post);
  }

  return (
    <>
      {!postExpanded ? (
        <div className="bg-[#15202B] min-h-full h-auto  w-full absolute pb-12">
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
                clickPost={clickPost}
              />
            ))}
        </div>
      ) : (
        <div className="bg-[#15202B] min-h-full h-auto  w-full absolute pb-12 ">
          <BrowseSection user={user} />
          {/* The profile header and the for you & following tbas */}
          {
            <Posts
              // key={key}
              post={post}
              postExpanded={postExpanded}
              setPostExpanded={setPostExpanded}
              clickPost={clickPost}
            />
          }
          <div className="h-40 w-full ">
            {/* <button className="absolute right-5 bottom-5 px-4 py-2 rounded-full bg-[#359BF0] text-white">
                Post
              </button> */}

            {/* This function will send a post request to comment path and add content of text area to comment arr */}
            <PostCreation />
          </div>

          {/* This div will map all the comments made on the post, i.e. the comments found on the post array */}
          <div className=" w-full flex flex-col">
            <Posts
              post={post}
              postExpanded={false}
              //   setPostExpanded={setPostExpanded}
              clickPost={clickPost}
            />
          </div>
          <div className=" w-full flex flex-col">
            <Posts
              post={post}
              postExpanded={false}
              //   setPostExpanded={setPostExpanded}
              clickPost={clickPost}
            />
          </div>
          <div className=" w-full flex flex-col">
            <Posts
              post={post}
              postExpanded={false}
              //   setPostExpanded={setPostExpanded}
              clickPost={clickPost}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PostsSections;
