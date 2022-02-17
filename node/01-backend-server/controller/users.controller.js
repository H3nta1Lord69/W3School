const User = require("../models/users");

const getUsers = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: "Getting users",
  });
};

const createUsers = async (req, res) => {
  const { name, password, email } = req.body;
  const user = new User(req.body);

  // Save in the db
  await user.save();

  res.status(200).json({
    ok: true,
    user,
  });
};

module.exports = { getUsers, createUsers };
