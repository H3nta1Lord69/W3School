const User = require("../models/users");
const bcrypt = require("bcryptjs");
const res = require("express/lib/response");

const getUsers = async (req, res) => {
  const user = await User.find();

  res.status(200).json({
    ok: true,
    user,
  });
};

const createUsers = async (req, res) => {
  const { password, email } = req.body;

  try {
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        ok: false,
        msg: "The email already exists",
      });
    }

    const user = new User(req.body);

    // Password encrypt
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    // Save user in the db
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

// TODO: Validate token and user
const updateUsers = async (req, res) => {
  const uid = req.params.id;
  const {} = req.body;

  try {
    const userDB = await User.findById(uid);

    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: `User doesn't exists`,
      });
    }

    // Updating
    const { password, google, email, ...fields } = req.body;

    if (userDB.email !== email) {
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        return res.status(400).json({
          ok: false,
          msg: `That email already exists`,
        });
      }
    }

    fields.email = email;

    const userUpdated = await User.findByIdAndUpdate(uid, fields, {
      new: true,
    });

    res.json({
      ok: true,
      uid,
      user: userUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Unexpected error...",
    });
  }
};

const deleteUsers = async (req, res) => {
  const uid = req.params.id;
  try {
    const userDB = await User.findById(uid);

    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: `User doesn't exists`,
      });
    }

    await User.findByIdAndDelete(uid);

    return res.status(200).json({
      ok: true,
      msg: "User deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: `Unexpected error...`,
    });
  }
};

module.exports = { getUsers, createUsers, updateUsers, deleteUsers };
