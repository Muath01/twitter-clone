import express from "express";
import { PostModel } from "../models/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("ON postxx ");
  try {
    const posts = await PostModel.find();

    // console.log("POSTid: ", posts[0]);
    res.json(posts);
  } catch (error) {
    console.log("err: ", error.message);
    res.json({ success: "false" });
  }
});

router.post("/", async (req, res) => {
  try {
    const createPost = await PostModel({
      username: req.body.username,
      content: req.body.content,
    });

    await createPost.save();

    const posts = await PostModel.find();

    res.json(posts);
  } catch (error) {
    console.log("error: ", error.message);
    res.json({ success: "false" });
  }
});

export default router;
