// import from files
const User = require("./../../models/user");

// dashboard or profile
const dashboard = async (req, res) => {
  try {
    // entry data of params
    const { all, data } = req.query;

    // token
    const token = req.token;

    // check token
    if (!token) {
      return res
        .status(401)
        .json({ msg: `bad request`, err: `token is not in requset!` });
    }

    // user in DB
    const user = await User.findById(token.id);

    // check fornt if it's want all data of user
    if (all && all === "true") {
      return res.status(200).json({ user });
    }

    // filter response
    const response = {
      name: user.name,
    };
    // check data
    if (data) {
      // data list
      const dataList = data.split(",");

      // map data list
      for (const prop of dataList) {
        // set in filter response
        if (user[prop] !== undefined) {
          response[prop] = user[prop];
        }
      }
    }

    // success
    res.status(200).json(response);
  } catch (error) {
    // server err
    res.status(500).json({ err: error.message });
  }
};

// export
module.exports = { dashboard };
