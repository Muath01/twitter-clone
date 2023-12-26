import express from "express";
import { CommentModel, PostModel } from "../models/Post.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { postId } = req.query;

  console.log("postId: ", postId);

  try {
    const post = await PostModel.findOne({ _id: postId });

    res.json(post.comments);
  } catch (error) {
    console.log("/comments:get= ", error.message);
  }
  // const {postId}
});

router.post("/", async (req, res) => {
  const { username, post: postId, content } = req.body;

  try {
    const post = await PostModel.findOne({ _id: postId });

    const newComment = new CommentModel({
      content: content,
      username: username,
      likes: 0,
    });

    // newComment.save();

    post.comments.push(newComment);

    await post.save();

    res.json(post.comments);

    //This is comment?
  } catch (error) {
    console.log("/comment:post= ", error.message);
  }
});

export default router;
