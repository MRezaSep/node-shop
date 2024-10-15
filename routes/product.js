// imoprt from packages
const express = require("express");

// init
const productRouter = express.Router();

// get all product with filters
productRouter.route("/").get();

// get single product and post new product and update product and delete product
productRouter.route("/:id").get().post().patch().delete();

// export
module.exports = productRouter;
