// import form packages
const express = require("express");

// import form files
const { sendOTP } = require("../controllers/auth/send-otp");
const { verifyOTP } = require("../controllers/auth/verify-otp");
const { signupUser } = require("./../controllers/auth/signup-user");
const { clubSignup } = require("./../controllers/auth/signup-club");

// fast auth init
const { fastAuth } = require("./../controllers/auth/fast-auth");

// init
const authRouter = express.Router();

// send otp code route
authRouter.route("/send-otp").post(sendOTP);

// verify otp and auto login
authRouter.route("/verify-otp").post(verifyOTP);

// simple signup user
authRouter.route("/signup").post(signupUser);

// club signup user
authRouter.route("/signup/club").post(clubSignup);

// -------------------------------------------------> (fast auth)
authRouter.route("/fast-auth").get(fastAuth);

// export
module.exports = authRouter;
