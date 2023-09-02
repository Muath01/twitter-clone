import { createSlice, current } from "@reduxjs/toolkit";
import { PostType } from "./postsReducer";

const initialState: PostType[] = []; // comments are identical to posts in the way you interact with them(like, reply, etc)

export const commentsReducer = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action) => {
      const comment = action.payload;
      console.log("commentsRedux: ", comment);
      if (Array.isArray(comment)) {
        console.log("arr");
        return [...action.payload];
        console.log("arr");
      } else {
        const updatedState = current(state).map((item) => {
          if (item._id == comment._id) {
            return {
              ...item,
              likes: comment.likes,
              likedBy: comment.likedBy,
            };
          }

          return item;
        });
        return updatedState; // Add this return statement
      }
    },
  },
});

export const { setComments } = commentsReducer.actions;

export default commentsReducer.reducer;
