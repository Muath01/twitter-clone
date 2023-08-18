import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { PostModel } from "./models/Post.js";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://muathkhalifa:twitterClone@twitter-clone.urccaxk.mongodb.net/twitter-clone?retryWrites=true&w=majority"
);

// PostModel.deleteMany({})
//   .then(() => {
//     console.log("All documents deleted successfully.");
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

app.get("/posts", async (req, res) => {
  try {
    const posts = await PostModel.find();

    res.json(posts);
  } catch (error) {
    console.log("err: ", error.message);
    res.json({ success: "false" });
  }
});

app.post("/post", async (req, res) => {
  try {
    const createPost = await PostModel({
      content: req.body.content,
    });

    await createPost.save();
    res.json({ message: "success" });
  } catch (error) {
    console.log("error: ", error.message);
    res.json({ success: "false" });
  }
});

app.listen(3001, () => console.log("server started...s"));
