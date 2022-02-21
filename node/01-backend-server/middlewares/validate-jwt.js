const jwt = require("jsonwebtoken");

const validateJwt = (req, res, next) => {
  // Read token
  const token = req.header("x-token");
  console.log(token);

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: `There's no token`,
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);

    req.uid = uid;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: `Invalid token`,
    });
  }
};

module.exports = {
  validateJwt,
};
