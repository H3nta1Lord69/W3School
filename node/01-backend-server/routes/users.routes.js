/**
 * Route: api/users
 */

const { Router } = require("express");
const { check } = require("express-validator");
const { getUsers, createUsers } = require("../controller/users.controller");

const router = Router();

router.get("/", getUsers);
router.post(
  "/",
  [
    check("name", "Name is mandatory").not().isEmpty(),
    check("password", "Password is mandatory").not().isEmpty(),
    check("email", "Email is mandatory").isEmail(),
  ],
  createUsers
);

module.exports = router;
