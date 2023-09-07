import express from "express";
import { CommentModel, PostModel } from "../models/Post.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { postId } = req.query;
  try {
    const post = await PostModel.findOne({ _id: postId });

    res.json(post.comments);
  } catch (error) {
    console.log(error.message);
  }
  // const {postId}
});

router.post("/", async (req, res) => {
  const { username, post: postId, content } = req.body;

  try {
    const post = await PostModel.findOne({ _id: postId });
    const { _id: userId } = await UserModel.findOne({ username: username });

    const newComment = new CommentModel({
      content: content,
      username: username,
      likes: 0,
    });
    // newComment.save();

    post.comments.push(newComment);

    await post.save();

    // console.log(user._id);
    // console.log("comment: ", newComment);
    // console.log("POSTComms: ", post.comments[0]);

    res.json(post.comments);

    //This is comment?
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
