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

  try {
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        ok: false,
        msg: "The email already exists",
      });
    }

    const user = new User(req.body);

    // Save in the db
    await user.save();

    res.status(200).json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Unexpected error...",
    });
  }
};

module.exports = { getUsers, createUsers };
