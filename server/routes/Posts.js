import express from "express";
import { PostModel } from "../models/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("ON post ");
  try {
    const posts = await PostModel.find();

    // console.log("posts: ", posts);
    // console.log("POSTid: ", posts[0]);
    res.json(posts);
  } catch (error) {
    console.log("err: ", error.message);
    res.json({ success: "false" });
  }
});

router.post("/", async (req, res) => {
  console.log("ON post ");

  try {
    const createPost = await PostModel({
      username: req.body.username,
      content: req.body.content,
    });

    await createPost.save();
    res.json({ message: "success" });
  } catch (error) {
    console.log("error: ", error.message);
    res.json({ success: "false" });
  }
});

export default router;
