// import from packages
const express = require("express");

// import from files
const { verifyToken } = require("./../middlewares/jwt");
const { checkAdmin } = require("./../middlewares/admin-check");
const { dashboard } = require("./../controllers/user/dashboard");
const { updateUser } = require("./../controllers/user/update-user");
const { getAllUsers } = require("./../controllers/user/get-users");

// init
const userRouter = express.Router();

// dashboard page for user / admin and update user data ---> (with out name and phone number edit) and delete account
userRouter
  .route("/")
  .get(verifyToken, dashboard)
  .put(verifyToken, updateUser)
  .delete();

// edit profile
userRouter.route("/edit").post();


// get user list (just admin)
userRouter.route("/users").get(verifyToken, checkAdmin, getAllUsers);

// export
module.exports = userRouter;
