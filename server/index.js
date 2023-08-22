import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { PostModel } from "./models/Post.js";
import bodyParser from "body-parser";
import { UserModel } from "./models/Users.js";
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

app.post("/register", async (req, res) => {
  // console.log("here: ", req.body);
  const { username, email, password } = req.body.userSignUpInfo;

  // console.log("username: ", username);

  try {
    const user = await UserModel.find({ username: username });

    if (
      user.length == 0 &&
      user[0]?.username != username &&
      user[0]?.email != email
    ) {
      console.log("Creating new users... ");
      const createNewUser = await UserModel({
        username,
        email,
        password,
      });

      await createNewUser.save();
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.log("error unable to post stuff");
  }
});

app.get("/auth", async (req, res) => {
  const { email, password } = req.query.loginInfo;

  try {
    const user = await UserModel.find({ email: email });

    // console.log("user: ", user[0].email, "userpass: ", user[0].password);

    // console.log("emai: ", email, "password: ", password);

    if (
      user.length != 0 &&
      user[0].email == email &&
      user[0].password == password
    ) {
      console.log("Loggin in ");

      res.json({ success: true, user: user[0] });
    } else {
      console.log("can't login");
      res.json({ success: false, username: user[0].username });
    }
  } catch (error) {
    console.log("error: ", error.message);
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await PostModel.find();
    // console.log("POSTid: ", posts[0]);
    res.json(posts);
  } catch (error) {
    console.log("err: ", error.message);
    res.json({ success: "false" });
  }
});

// Assuming you have the user ID and post ID available

// Find the post by ID

app.post("/like", async (req, res) => {
  console.log(req.body);

  const { id: postId, username } = req.body;
  let post = await PostModel.findById(postId).exec();
  const userId = await UserModel.findOne({ username }, "_id").exec();

  // console.log("post: ", post);
  const isLiked = post.likedBy.some((obj) => {
    console.log("objId: ", obj._id.toString()); //64e07024c7484dab961bb787
    console.log("userId: ", userId._id.toString()); // 64e07024c7484dab961bb787
    return obj._id.equals(userId._id);
  });
  // console.log("isliked: ", isLiked);

  if (isLiked) {
    console.log("user has already like the post! ");

    console.log("post-before: ", post.likedBy); //post-before:  [ { _id: new ObjectId("64e07024c7484dab961bb787") } ]

    post.likedBy = post.likedBy.filter(
      (item) => item._id.toString() !== userId._id.toString()
    );
    post.likes--;
    await post.save();
    console.log("post-after: ", post.likedBy); //post-after:  [ { _id: new ObjectId("64e07024c7484dab961bb787") } ]
    res.json({ post, liked: true });
  } else {
    // User has not liked the post, add user ID to likedBy array and increment likes count
    post.likedBy.push(userId);
    post.likes++;

    // Save the updated post
    post = await post.save();

    // Convert the post object to a plain JavaScript object
    const plainPost = post.toObject();

    // Send the response with the plainPost object
    await res.json({ post, liked: true });

    // Post liked successfully
    console.log("post liked succefully");
  }
});
app.post("/post", async (req, res) => {
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

app.listen(3001, () => console.log("server started...s"));
