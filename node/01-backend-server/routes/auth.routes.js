/**
 * Route: api/login
 */
const { Router } = require("express");
const { check } = require("express-validator");
const {
  login,
  googleSignIn,
  renewToken,
} = require("../controller/auth.controller");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.post(
  "/",
  [
    check("email", "Email is mandatory").isEmail(),
    check("password", "Password is mandatory").not().isEmpty(),
    validateFields,
  ],
  login
);

router.post(
  "/google",
  [check("token", "Token is mandatory").not().isEmpty(), validateFields],
  googleSignIn
);

router.get("/renew", validateJwt, renewToken);

module.exports = router;
