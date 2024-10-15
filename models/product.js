// import from packages
const mongoose = require("mongoose");

// init
const Schema = mongoose.Schema; 

// product schema
const productSchema = new Schema({
  // basic description
  name: {
    type: String,
    trim: true,
    required: [true, "product must have name!"],
  },

  price: {
    type: Number,
    required: [true, "product must have price!"],
  },

  // last update quantity
  lastUpdatedQuantity: {
    type: Number,
    default: 0,
  },

  // real time quantity of ARYA SERVERa
  realTimeQuantity: Number,

  description: {
    type: String,
    trim: true,
    required: [true, "product must have description!"],
  },

  images: [
    {
      type: String,
    },
  ],

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  // banibon code
  code: {
    type: String,
    trim: true,
    required: [true, "bani bon code is required for product!"],
  },

  // comments
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      text: String,
      rating: Number,
      date: Date,

      // reply comments for admin
      replies: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          text: String,
          date: Date,
        },
      ],
    },
  ],

  //---------------------(pro descriptions)---------------------\\

  // age range
  ageRange: {
    type: String,
    enum: ["Kids", "Teenagers", "Adults", "All"],
  },

  // age range pro
  proAgeRange: {
    type: String,
    default: "0-100",
  },

  // brand
  brand: {
    type: String,
    trim: true,
    default: "",
  },

  // active
  active: {
    type: Boolean,
    default: true,
  },

  whyToBuy: String,

  goodFor: [String],

  colors: [String],

  sizes: [String],

  discounts: [
    {
      discountPercentage: Number,
      startDate: Date,
      endDate: Date,
    },
  ],

  special: {
    type: Boolean,
    default: false,
  },
});

// export
module.exports = mongoose.model("Product", productSchema);
