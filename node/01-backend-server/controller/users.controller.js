const User = require("../models/users");

const getUsers = async (req, res) => {
  const user = await User.find();

  res.status(200).json({
    ok: true,
    user,
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
