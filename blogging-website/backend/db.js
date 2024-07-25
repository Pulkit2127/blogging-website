const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jojosehrawat21:2nb82EUacxSpf9T7@cluster0.r4yw3jl.mongodb.net/Blogging-Website"
);

const userSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  password: String,
});

const blogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    title: String,
    content: String,
    previewImg: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);
const Blog = mongoose.model("Blogs", blogSchema);

module.exports = {
  User,
  Blog,
};
