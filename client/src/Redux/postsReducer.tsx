import {
  PayloadAction,
  configureStore,
  createSlice,
  current,
} from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export interface PostType {
  content: String;
  likes: Number;
  _id: string;
  likeyBy: Array<String>;
}

const initialState: PostType[] = [];

export const postReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      const post = action.payload;
      if (Array.isArray(post)) {
        return [...action.payload];
        console.log("arr");
      } else {
        const updatedState = current(state).map((item) => {
          if (item._id == post._id) {
            // console.log("item:", item);
            // console.log("post:", post);
            return {
              ...item,
              likes: post.likes,
              likedBy: post.likedBy,
            };
          }

          return item;
        });
        return updatedState; // Add this return statement
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts } = postReducer.actions;

export default postReducer.reducer;
