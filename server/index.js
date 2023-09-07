import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { CommentModel, PostModel } from "./models/Post.js";
import bodyParser from "body-parser";
import { UserModel } from "./models/Users.js";
import { dirname } from "path";
import commentsRoute from "./routes/Comments.js";
import postsRoute from "./routes/Posts.js";
import authRoute from "./routes/Auth.js";
import registerRoute from "./routes/Register.js";
import likeRoute from "./routes/Like.js";
import path from "path";
import { fileURLToPath } from "url";

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

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.redirect("/");
  // res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// // Define a catch-all route
// app.get(["/contact", "/chart", "/test", "/payment"], (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });
app.use("/comments", commentsRoute);
app.use("/posts", postsRoute);
app.use("/auth", authRoute);
app.use("/register", registerRoute);
app.use("/like", likeRoute);

// Assuming you have the user ID and post ID available

// Find the post by ID

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
