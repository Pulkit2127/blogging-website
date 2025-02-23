const express = require("express");
const userRouter = require("./user");
const blogRouter = require("./blog");

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/blog", blogRouter);

module.exports = mainRouter;
