// import from files
const User = require("./../../models/user");

// signup user
const signupUser = async (req, res) => {
  try {
    // entry data
    const { first, last, phoneNumber } = req.body;

    // check entry data exist
    if (!first || !last || !phoneNumber) {
      return res
        .status(401)
        .json({ msg: `bad request :(`, err: `some fileds are empty!` });
    }

    // check for existed user
    const existedUser = await User.findOne({ phoneNumber });

    // existed user can't signup
    if (existedUser) {
      return res
        .status(400)
        .json({ msg: `bad request :(`, err: `user is already exist!` });
    }

    // create new user
    const newUser = new User({ name: { first, last }, phoneNumber });
    await newUser.save();

    // successful
    res.status(200).json({ newUser });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

// export
module.exports = { signupUser };
