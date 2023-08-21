import mongoose, { mongo } from "mongoose";

const PostSchema = mongoose.Schema({
  username: { type: String },
  content: { type: String },
  likes: { type: Number },
});

export const PostModel = mongoose.model("Post", PostSchema);
