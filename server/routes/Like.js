import express from "express";
import { PostModel } from "../models/Post.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("ON likes ");

  const { id: postId, username } = req.body;
  let post = await PostModel.findById(postId).exec();
  const userId = await UserModel.findOne({ username }, "_id").exec();

  // console.log("post: ", post);
  const isLiked =
    post &&
    post.likedBy.some((obj) => {
      // console.log("objId: ", obj._id.toString()); //64e07024c7484dab961bb787
      // console.log("userId: ", userId._id.toString()); // 64e07024c7484dab961bb787
      return obj._id.equals(userId._id);
    });
  // console.log("isliked: ", isLiked);

  if (isLiked) {
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

export default router;
