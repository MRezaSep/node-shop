// import from file
const Product = require("./../../models/product");

// get all and filter
const getAllProductsAndFilters = async (req, res) => {
  try {
    // select product of DB
    const products = await Product.find({});

    // send selected products
    res.status(200).json({ products });
  } catch (error) {
    // server err
    res.status(500).json({ msg: `server error`, err: error.message });
  }
};

// export
module.exports = { getAllProductsAndFilters };
