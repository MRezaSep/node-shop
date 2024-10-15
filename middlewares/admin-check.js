// import from files
const User = require("./../models/user");

// check admin
const checkAdmin = async (req, res, next) => {
  try {
    // init
    const userId = req.token.id;

    // find user
    const user = await User.findById(userId);

    // check user
    if (!user) {
      return res.status(400).json({ msg: `user not exist!` });
    }

    // admin bool
    const admin = user.admin;

    // success
    if (admin === true) {
      // ==>
     return  next();
    }

    // err
    res.status(401).json({
      msg: `bad request for this account :( `,
      err: `you are not admin yet!`,
    });
  } catch (error) {
    // server err
    res.status(500).json({ err: error.message });
  }
};

// export
module.exports = { checkAdmin };
