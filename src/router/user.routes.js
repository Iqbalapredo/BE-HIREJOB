const express = require("express");

const {
  All,
  update,
  deleted,
  UserByName,
  AllId,
  register,
  login,
} = require("../controller/user.controller");
const { uploadImg } = require("../middleware/uploadImg");
const { destroyProfile } = require("../middleware/destroyImg");


const userRouter = express.Router();

userRouter
  .get("/user", All)
  .get("/user/:id", AllId)
  .get("/user/name/:name", UserByName)
  .put("/user/:id", destroyProfile, uploadImg, update)
  .delete("/user/:id", destroyProfile, deleted)
  .post("/register", register)
  .post("/login", login);

module.exports = userRouter;
