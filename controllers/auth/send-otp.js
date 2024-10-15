// import from packages
require("dotenv").config();
const request = require("request");

// import form files
const User = require("../../models/user");

// init
const otpCodes = {};
const SMSpanelURL = process.env.FARAZ_PANEL;
const panelAPIkey = `A${process.env.SMS_KEY}s=`;

// OTP codes cleaner function
const OTPcodesCleaner = () => {
  // current date
  const currentTime = Date.now();

  // map the codes class
  for (const phoneNumber in otpCodes) {
    // extract expiration time of class
    const { expirationTime } = otpCodes[phoneNumber];

    // check expiration time for delete
    if (expirationTime <= currentTime) {
      delete otpCodes[phoneNumber];
    }
  }
};

// start cleaning every 5 minutes
setInterval(OTPcodesCleaner, 5 * 60 * 1000);

// send OTP code
const sendOTP = async (req, res) => {
  try {
    // entry data
    const { phoneNumber, club } = req.body;

    // check phone number
    if (!phoneNumber || phoneNumber.length !== 13) {
      return res.status(400).json({ msg: `Phone nuber err!` });
    }

    // check for user history for club signup
    if (club === true) {
      const existedUser = await User.findOne({ phoneNumber });
      if (existedUser && existedUser.club === true) {
        return res
          .status(401)
          .json({ msg: `this phone number is alredy exist in club!` });
      }
    }

    // create random code
    const otpCode = Math.floor(1000 + Math.random() * 9000);

    // create expiration time : 5 min
    const expirationTime = Date.now() + 5 * 60 * 1000;

    // set data to otpCodes object
    otpCodes[phoneNumber] = { otpCode, expirationTime };

    // send OTP code to user
    request.post(
      {
        url: SMSpanelURL,
        headers: {
          "Content-Type": "application/json",
          Authorization: panelAPIkey,
        },
        body: {
          pattern_code: "dav4x19mbtshf7d",
          originator: "+98100020400",
          recipient: phoneNumber,
          values: {
            code: otpCode.toString(),
          },
        },
        json: true,
      },

      // call back function
      function (error, response, body) {
        if (!error && response.statusCode === 200) {
          // success`
          return res.status(200).json({ msg: `success :)` });
        } else {
          // error
          return res.status(501).json({
            msg: `sever error`,
            where: `Faraz SMS panel error!`,
            body,
          });
        }
      }
    );
  } catch (error) {
    // server err
    res.status(500).json({ err: error.message });
  }
};

// export
module.exports = { sendOTP, otpCodes };
