import mongoose, { mongo } from "mongoose";

const PostSchema = mongoose.Schema({
  username: { type: String },
  content: { type: String },
  likes: { type: Number, default: 0 },
  likedBy: { type: [{ _id: mongoose.Schema.Types.ObjectId }], default: [] },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

export const PostModel = mongoose.model("Post", PostSchema);
