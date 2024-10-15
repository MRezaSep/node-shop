// import form packages
require("dotenv").config();
const jwt = require("jsonwebtoken");

// create token
const createToken = (user) => {
  const accessToken = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    process.env.TOKEN_PASS
  );
  return accessToken;
};

// verify token
const verifyToken = (req, res, next) => {
  try {
    const webUserToken = req.cookies["access-token"];
    const appUserToken = req.headers.authorization;

    // chek is token exist in request
    if (!webUserToken && !appUserToken) {
      return res.status(400).json({ msg: `user dont have token!` });
    }

    const existedToken = webUserToken || appUserToken;

    // verify token
    const verifyToken = jwt.verify(existedToken, process.env.TOKEN_PASS);

    if (!verifyToken) {
      return res.status(400).json({ msg: `user not login` });
    }

    req.token = verifyToken;
    next();
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

// export
module.exports = { createToken , verifyToken};
