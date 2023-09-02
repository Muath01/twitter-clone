import mongoose, { mongo } from "mongoose";

const CommentSchema = mongoose.Schema({
  username: { type: String },
  content: { type: String },
  likes: { type: Number, default: 0 },
  likedBy: { type: [{ _id: mongoose.Schema.Types.ObjectId }], default: [] },
  // comments: [{ type: [CommentSchema], default: [], ref: "Comment" }],
});

const PostSchema = mongoose.Schema({
  username: { type: String },
  content: { type: String },
  likes: { type: Number, default: 0 },
  likedBy: { type: [{ _id: mongoose.Schema.Types.ObjectId }], default: [] },
  comments: { type: [CommentSchema], default: [], ref: "Comment" },
});

export const PostModel = mongoose.model("Post", PostSchema);
export const CommentModel = mongoose.model("Comment", CommentSchema);
