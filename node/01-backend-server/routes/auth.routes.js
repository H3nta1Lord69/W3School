/**
 * Route: api/login
 */
const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controller/auth.controller");
const { validateFields } = require("../middlewares/validate-fields");

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

module.exports = router;
