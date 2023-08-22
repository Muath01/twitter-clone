import mongoose, { mongo } from "mongoose";

const PostSchema = mongoose.Schema({
  username: { type: String },
  content: { type: String },
  likes: { type: Number, default: 0 },
  likedBy: { type: [{ _id: mongoose.Schema.Types.ObjectId }], default: [] },
});

export const PostModel = mongoose.model("Post", PostSchema);
