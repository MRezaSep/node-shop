// import from packages
const mongoose = require("mongoose");

// init
const Schema = mongoose.Schema;

// tiket model
const tiketSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "title is required for tiket!"],
  },

  code: {
    type: String,
    trim: true,
    required: [true, "code is required for tiket!"],
  },

  expirationTime: {
    start: {
      type: Date,
      required: [true, "every tikets need start time!"],
    },

    end: {
      type: Date,
      required: [true, "every tikets need end time!"],
    },

    description: {
      type: String,
      default: "",
    },
  },
});

// export
module.exports = mongoose.model("Tiket", tiketSchema);
