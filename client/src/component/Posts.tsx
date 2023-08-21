import React, { useEffect } from "react";

function Posts({ content, username }: any) {
  // useEffect(() => {
  //   getPosts();
  // }, []);

  // console.log("On Posts component");
  return (
    <div className="border-b bg-[#15202B] border-gray-600 min-h-[15%] w-full h-auto  relative    flex flex-col gap-2 items-center justify-end pt-8 pb-[1.5rem] ">
      <div className=" absolute left-2 top-2 flex gap-2     text-white h-auto w-1/2">
        <div className="w-[40px] h-[40px] rounded-[100%] bg-white relative "></div>
        <p>{username}</p>
      </div>
      <div className="text-left w-4/5 h-auto justify-self-end left-5 relative">
        {content}
      </div>
      <div className="flex  w-4/5 relative  justify-end left-6 items-center gap-10 text-[20px] text-gray-400 flex-row-reverse ">
        <i className="fa-regular fa-heart "></i>
        <i className="fa-solid fa-retweet"></i>
        <i className="fa-regular fa-comment"></i>{" "}
      </div>
    </div>
  );
}

export default Posts;
