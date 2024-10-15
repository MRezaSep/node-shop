// import form packages
const mongoose = require("mongoose");

// init
const Schema = mongoose.Schema;

// user model
const UserSchema = new Schema({
  // -------------start-----------------------(personal information of user)-------{
  name: {
    first: {
      type: String,
      trim: true,
      required: [true, "first name should be enter!"],
    },

    last: {
      type: String,
      trim: true,
      required: [true, "last name should be enter!"],
    },
  },

  phoneNumber: {
    type: String,
    trim: true,
    required: [true, "phone number should be enter!"],
  },

  // club requirements
  address: {
    type: String,
    default: "",
  },

  postCode: {
    type: String,
    default: "",
  },

  job: {
    type: String,
    default: "",
  },

  birthDate: {
    type: Date,
    required: false,
  },

  nationalCode: {
    type: String,
    default: "",
  },

  marriageStatus: {
    type: Boolean,
    default: false,
  },

  marriageDayDate: {
    type: Date,
    required: false,
  },
  // -------------end-----------------------(personal information of user)-------}

  // -------------start------------(website requirements)-------{
  avatarImage: {
    type: String,
    default: "",
  },

  bookmark: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],

  favoriteProducts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],

  userComments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],

  club: {
    type: Boolean,
    default: false,
  },

  type: {
    type: String,
    default: "user",
  },

  adminPassword: {
    type: String,
    default: "",
  },

  // { Access of user }
  access: {

    // ------------------------> product route access
    product: {

      // add product
      addProduct: {
        type: Boolean,
        default: false,
      },

      // update product
      updateProduct: {
        type: Boolean,
        default: false,
      },

      // delete product
      deleteProduct: {
        type: Boolean,
        default: false,
      },

      // view product info
      productInfo: {
        type: Boolean,
        default: false,
      },
    },

    // ---------------------------------------> user route access
    user: {

      // chat with user (answer tikets)
      chat: {
        type: Boolean,
        default: false,
      },

      // add user to website or club
      addUser: {
        type: Boolean,
        default: false,
      },

      // update user of website or club
      updateUser: {
        type: Boolean,
        default: false,
      },

      // delet user of website or club
      deleteUser: {
        type: Boolean,
        default: false,
      },

      // view user info and history
      viewUserInfoAndHistory: {
        type: Boolean,
        default: false,
      },

      // change access level
      changeAccessLevel: {
        type: Boolean,
        default: false,
      },
    },

    // ---------------------------------------> theme access
    theme: {
      // change theme (front-end access)
      changeTheme: {
        type: Boolean,
        default: false,
      },
    },

    // ---------------------------------------> web visit access
    webVisit: {
      // view web visit 
      
    },
    celebration: {},
  },

  wallet: {
    type: Number,
    default: 0,
  },

  basket: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },

      count: {
        type: Number,
      },
    },
  ],

  factors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Factor",
    },
  ],

  tikets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tiket",
    },
  ],

  deleveryNewsWay: {
    type: String,
    default: "SMS",
  },
  // -------------end------------(website requirements)-------}

  signupDate: {
    type: Date,
    default: Date.now,
  },
});

// export
module.exports = mongoose.model("User", UserSchema);
