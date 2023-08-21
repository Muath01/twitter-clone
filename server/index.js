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

      res.json({ success: true, user: user[0].username });
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

    res.json(posts);
  } catch (error) {
    console.log("err: ", error.message);
    res.json({ success: "false" });
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
