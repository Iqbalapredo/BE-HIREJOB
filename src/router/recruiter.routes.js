const express = require("express");

const {
  register,
  login,
  All,
  RecId,
  deleted,
  update,
  RecByName
} = require("../controller/recruiter.controller");
const { uploadImg } = require("../middleware/uploadImg");
const { destroyRecruiter } = require("../middleware/destroyImg");

const recruiterRouter = express.Router();

recruiterRouter
.get('/recruiter', All)
.get('/recruiter/:id', RecId)
.get('/recruiter/name/:company', RecByName)

.put("/recruiter/:id", destroyRecruiter, uploadImg, update)
.delete('/recruiter/:id', destroyRecruiter, deleted)

.post('/recruiter/register', register)
.post('/recruiter/login', login);

module.exports = recruiterRouter;
