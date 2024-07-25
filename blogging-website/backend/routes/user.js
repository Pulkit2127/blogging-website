const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { JWT_SECRET } = require("../config.js");

const userRouter = express.Router();

// .../user/signup
userRouter.post("/signup", async (req, res) => {
  const body = req.body;

  const existingUser = await User.findOne({
    username: body.username,
  });

  if (existingUser) {
    res.status(403).json({
      message: "BKL kitne acc. bnayega",
    });
    return;
  }

  const user = await User.create(body);

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  res.json({
    message: "User Created",
    token,
  });
});

// .../user/signin
userRouter.post("/signin", async (req, res) => {
  const body = req.body;

  const existingUser = await User.findOne({
    username: body.username,
    password: body.password,
  });

  if (existingUser) {
    const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET);

    res.json({
      message: "Login Successfull",
      token,
    });
    return;
  }

  res.status(403).json({
    message: "Ma chuda bhosdk",
  });
});

module.exports = userRouter;
