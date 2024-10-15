// import form packages
require("dotenv").config();
const express = require("express");
const cookiParser = require("cookie-parser");
const cors = require("cors");

// import form files
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const { connectDB } = require("./db/connectDB");

// init
const app = express();
const apiUrl = "/api/v1";

app.use(
  cors({
    // origin: "http://localhost:5000",
    origin: "*",
  })
);

// port
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cookiParser());
app.use(express.static("./public/V1/SplashScreen"))

// routes
app.use(`${apiUrl}/auth`, authRouter); // ------> ( Auth )
app.use(`${apiUrl}/user`, userRouter); // ------> ( user )

// test route
app.get("/test", (req, res) => {
  res.status(200).json("it's work!");
});

// start function
const start = async () => {
  try {
    // connect to db first
    await connectDB(process.env.MONGOURL);

    // server listen
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} ...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
