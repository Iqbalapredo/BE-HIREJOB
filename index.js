// declare library
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const xss = require("xss-clean");

// buat route
const userRouter = require("./src/router/user.routes");

const recruiterRouter = require("./src/router/recruiter.routes");

const app = express();

try {
	app.use(express.static("public"));
	app.use(helmet());
	app.use(bodyParser.json());
	app.use(xss());
	app.use(cors());
	app.use(userRouter);
	app.use(recruiterRouter);
} catch (err) {
	console.log(err);
}

// jalankan express
app.listen(process.env.PORT, () => {
	console.log("SERVICE IS RUNNING ON PORT 5000");
});
