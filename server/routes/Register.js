import express from "express";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/", async (req, res) => {
  // console.log("here: ", req.body);
  const { username, email, password } = req.body.userSignUpInfo;

  try {
    const user = await UserModel.find({ username: username });

    if (
      user.length == 0 &&
      user[0]?.username != username &&
      user[0]?.email != email
    ) {
      // console.log("Creating new users... ");
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

export default router;
