import express from "express";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
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
      res.json({ success: true, user: user[0] });
    } else {
      console.log("can't login");
      res.json({ success: false, username: user[0].username });
    }
  } catch (error) {
    console.log("error: ", error.message);
  }
});

export default router;
