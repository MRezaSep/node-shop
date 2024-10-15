// import from files
const User = require("./../../models/user");

// update user
const updateUser = async (req, res) => {
  try {
    // user id
    const userId = req.token.id;

    // look for id
    if (!userId) {
      return res.status(404).json({ msg: `can't find id in token!` });
    }

    // select user in DB
    const user = await User.findById(userId);

    // check user
    if (!user) {
      return res.status(401).json({ msg: `user not exist!` });
    }

    // data body
    const updateFileds = req.body;

    // delete additional data
    delete updateFileds.name;
    delete updateFileds._id;
    delete updateFileds.wallet;
    delete updateFileds.admin;
    delete updateFileds.club;
    delete updateFileds.bookmark;
    delete updateFileds.favoriteProducts;
    delete updateFileds.userComments;
    delete updateFileds.adminPassword;
    delete updateFileds.factors;
    delete updateFileds.tikets;
    delete updateFileds.basket;
    delete updateFileds.phoneNumber;

    // assign user
    Object.assign(user, updateFileds);

    // save changes
    await user.save();

    // filter response
    const response = {
      name: user.name,
      phoneNumber: user.phoneNumber,
      address: user.address,
      postCode: user.postCode,
      job: user.job,
      birthDate: user.birthDate,
      nationalCode: user.nationalCode,
      marriageDayDate: user.marriageDayDate,
      avatarImage: user.avatarImage,
    };

    // success
    res.status(200).json(response);
  } catch (error) {
    // server err
    res.status(500).json({ err: error.message });
  }
};

// export
module.exports = { updateUser };
