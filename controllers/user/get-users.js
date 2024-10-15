// import from files
const User = require("./../../models/user");

// get all users (with filter)
const getAllUsers = async (req, res) => {
  try {
    // requset filter
    const filters = req.query.filters;

    // requireds in list
    filtersList = filters !== undefined ? filters.split(",") : [];

    // filter
    const filterObject = {};

    // set filters
    if (filtersList.includes("admin")) {
      filterObject.admin = true;
    }

    if (filtersList.includes("club")) {
      filterObject.club = true;
    }
    // all users
    const allUsers = await User.find(filterObject);

    // success
    res.status(200).json({ msg: `success`, data: allUsers });
  } catch (error) {
    // server err
    res.status(500).json({ err: error.message });
  }
};

// export
module.exports = { getAllUsers };
