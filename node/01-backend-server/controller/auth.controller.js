const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");
const User = require("../models/users");
const { googleVerify } = require("../helpers/google-verify");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate email
    const userDB = await User.findOne({ email });

    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: "Email or password invalid",
      });
    }

    // validate password
    const validPassword = bcryptjs.compareSync(password, userDB.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Email or password invalid",
      });
    }

    // Generate Token
    const token = await generateJWT(userDB.id);

    res.status(200).json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Communicate with an administrator",
    });
  }
};

const googleSignIn = async (req, res) => {
  const googleToken = req.body.token;

  try {
    const { name, email, picture } = await googleVerify(googleToken);

    // verify if email exists
    const userDB = await User.findOne({ email });
    let user;

    if (!userDB) {
      // If user doesn't exists
      user = new User({
        name,
        email,
        password: "@@@",
        img: picture,
        google: true,
      });
    } else {
      // User exists
      user = userDB;
      user.google = true;
      user.password = "@@@";
    }

    // Save on DB
    await user.save();

    // Generate token
    const token = await generateJWT(user.id);

    res.status(200).json({
      ok: true,
      token,
    });
  } catch (error) {
    res.status(401).json({
      ok: false,
      msg: "Invalid token",
      error,
    });
  }
};

const renewToken = async (req, res) => {
  const uid = req.uid;

  // Generate token
  const token = await generateJWT(uid);

  // Obtain the user
  const user = await User.findById(uid);

  res.status(200).json({
    ok: true,
    token,
    user,
  });
};

// Module exports
module.exports = { login, googleSignIn, renewToken };
