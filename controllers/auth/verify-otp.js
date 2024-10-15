// import form files
const { otpCodes } = require("./send-otp");
const { createToken } = require("../../middlewares/jwt");
const User = require("../../models/user");

// verify OTP
const verifyOTP = async (req, res) => {
  try { 
    // entry data
    const { phoneNumber, code, club } = req.body;

    // check entery data exist
    if (!phoneNumber || !code) {
      return res
        .status(470)
        .json({ msg: `bad request :( `, err: `I can't find params in body` });
    }
 
    // check send OTP codes list
    const existedOTPcode = otpCodes[phoneNumber]; 

    if (!existedOTPcode) {
      return res.status(471).json({
        msg: `bad request :( `,
        err: `there is no code for this phone number!`,
      });
    }

    // extract OTP data
    const { otpCode, expirationTime } = existedOTPcode;

    // check expiration time
    if (Date.now() >= expirationTime) {
      return res
        .status(472)
        .json({ msg: `bad request :(`, err: `your code is expired!` });
    }

    // check OTP code match
    if (code !== otpCode) {
      return res
        .status(473)
        .json({ msg: `bad request :(`, err: `your code is wrong!` });
    }

    // check existed user for auto login
    const existedUser = await User.findOne({ phoneNumber });

    // need to sginup
    if (!existedUser) {
      return res
        .status(200)
        .json({ msg: `code verify seccessfuly :)`, token: "" });
    }

    // check for club signup
    if (club === true) {
      return res
        .status(200)
        .json({ msg: `code verify seccessfuly :)`, userHistory: existedUser });
    }

    // create token for existed user
    const token = createToken(existedUser); 

    // set cookie for postman test
    // res.cookie("access-token", token, { maxAge: 60 * 60 * 24 * 30 });

    // auto login
    res.status(200).json({ msg: `code verify seccessfuly :)`, token: token });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

// export
module.exports = { verifyOTP };
