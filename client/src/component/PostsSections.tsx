import React from "react";
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
  return (
    <div className="bg-[#15202B] min-h-full h-auto  w-full absolute pb-12">
      <BrowseSection user={user} />
      {/* The profile header and the for you & following tbas */}
      {user.signed ? <PostCreation /> : ""}
      {postsRedux
        .slice(0)
        .reverse()
        .map((post: any, key: any) => (
          <Posts key={key} post={post} />
        ))}
    </div>
  );
}

export default PostsSections;
