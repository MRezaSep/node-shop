// import from files
const User = require("./../../models/user");
const { convertToDate } = require("./../../functions/convert-date");

// signup user in club
const clubSignup = async (req, res) => {
  try {
    // Extract user information from the request body
    const {
      first,
      last,
      phoneNumber,
      address,
      postCode,
      job,
      birthDate,
      nationalCode,
      marriageStatus,
      marriageDayDate,
      deleveryNewsWay,
    } = req.body;

    // check phone
    if (!phoneNumber || phoneNumber == undefined) {
      return res.status(469).json({ msg: `bade request`, err: `phone number undefiend!` });
    }

    if (
      !first ||
      !last ||
      !address ||
      !postCode ||
      !job ||
      !birthDate ||
      !nationalCode ||
      marriageStatus == undefined ||
      !marriageDayDate
    ) {
      return res
        .status(470)
        .json({ msg: `bad request!`, err: `some fileds are empty!` });
    }

    // check user history
    const existedUser = await User.findOne({ phoneNumber });

    // update existed user
    if (existedUser) {
      // finad and update
      const updateUser = await User.findOneAndUpdate(
        { phoneNumber },
        {
          $set: {
            name: { first, last },
            address,
            postCode,
            job,
            birthDate: convertToDate(birthDate),
            nationalCode,
            marriageStatus,
            marriageDayDate: convertToDate(marriageDayDate),
            club: true,
            deleveryNewsWay,
          },
        },
        { new: true }
      );

      if (!updateUser) {
        return res
          .status(471)
          .json({ msg: `update err`, err: `can't update user in db!` });
      }

      // success
      return res.status(200).json({ msg: `user updated sucessfuly` });
    }

    // create new user
    const newUser = new User({
      name: { first, last },
      phoneNumber,
      address,
      postCode,
      job,
      birthDate: convertToDate(birthDate),
      nationalCode,
      marriageStatus,
      marriageDayDate: convertToDate(marriageDayDate),
      club: true,
      deleveryNewsWay,
    });

    // save new user
    const saveUser = await newUser.save();

    if (!saveUser) {
      return res
        .status(472)
        .json({ msg: `save err`, err: `can't save new user in db!` });
    }

    // success
    res.status(200).json({ msg: `signup successful ;)` });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

// export
module.exports = { clubSignup };
