import mongoose, { mongo } from "mongoose";

const PostSchema = mongoose.Schema({
  content: { type: String },
  likes: { type: Number },
});

export const PostModel = mongoose.model("Post", PostSchema);
