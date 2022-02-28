const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");
const User = require("../models/users");

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

const googleSignIn = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: "Login with google sucesful",
  });
};

// Module exports
module.exports = { login, googleSignIn };
