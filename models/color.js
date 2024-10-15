// import form packages
const mongoose = require("mongoose");

// init
const Schema = mongoose.Schema;


const ColorSchema = new Schema({
    name:{
        type: String,
        required: true,
    },

    colorCode:{},
});