import { configureStore } from "@reduxjs/toolkit";
// import signedReducer from "./singedReducer";
// import jobReducer from "./jobReducer";
import postReducer from "./postsReducer";
import signedReducer from "./signedReducer";
import displayReducer from "./displayReducer";
import commentsReducer from "./commentsReducer";
export const store = configureStore({
  reducer: {
    postsRedux: postReducer,
    setSigned: signedReducer,
    displayRedux: displayReducer,
    commentsRedux: commentsReducer,
    // setSigned: signedReducer,
    // saveJobs: jobReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
