import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import commentsRoute from "./routes/Comments.js";
import postsRoute from "./routes/Posts.js";
import likeRoute from "./routes/Like.js";
import path from "path";
import { fileURLToPath } from "url";
import { CommentModel, PostModel } from "./models/Post.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://muathkhalifa:twitterClone@twitter-clone.urccaxk.mongodb.net/twitter-clone?retryWrites=true&w=majority"
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const location = path.dirname(path.join(__dirname, "../client/dist"));

console.log("location: ", location);

app.use("/comments", commentsRoute);
app.use("/posts", postsRoute);

app.use("/like", likeRoute);

app.listen(3001, () => console.log("server started...s"));

//Use to clear databse.

// PostModel.deleteMany({})
//   .then(() => {
//     console.log("All documents deleted successfully.");
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// CommentModel.deleteMany({})
//   .then(() => {
//     console.log("All documents deleted successfully.");
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });
