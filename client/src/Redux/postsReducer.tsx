import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export interface PostType {
  content: String;
  likes: Number;
}

const initialState: PostType[] = [];

export const postReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostType[]>) => {
      console.log(state);

      return [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts } = postReducer.actions;

export default postReducer.reducer;
