//  imoprt from packages
const mongoose = require("mongoose");

// connect to DB function
const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    // success
    .then(() => {
      console.log("connected to db :)");
    })
    // error
    .catch((err) => {
      console.log(`we have fucking error ==>  ${err} :(`);
    });
};

// export
module.exports = { connectDB };
