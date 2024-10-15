// import from files
const User = require("./../../models/user");
const { createToken } = require("./../../middlewares/jwt");

// fast auth for postman
const fastAuth = async (req, res) => {
  try {
    // entry data
    const  phoneNumber  = req.headers.phonenumber;


    // check data
    if (!phoneNumber) {
      return res.status(404).json({ msg: `phone number not found!` });
    }

    // user in db
    const user = await User.findOne({ phoneNumber });

    // check user
    if (!user) {
      return res.status(401).json({ msg: `user not exist!` });
    }

    // build token
    const token = createToken(user);

    // set cookie for postman test
    res.cookie("access-token", token, { maxAge: 60 * 60 * 24 * 30 });

    // success
    res.status(200).send("<h1> Fast Auth Completed ;)</h1>");
  } catch (error) {
    // server err
    res.status(500).json({ err: error.message });
  }
};

// export
module.exports = { fastAuth };
