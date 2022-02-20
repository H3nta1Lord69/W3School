/**
 * Route: api/users
 */

const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {
  getUsers,
  createUsers,
  updateUsers,
} = require("../controller/users.controller");

const router = Router();

router.get("/", getUsers);
router.post(
  "/",
  [
    check("name", "Name is mandatory").not().isEmpty(),
    check("password", "Password is mandatory").not().isEmpty(),
    check("email", "Email is mandatory").isEmail(),
    validateFields,
  ],
  createUsers
);

router.put(
  "/:id",
  [
    check("name", "Name is mandatory").not().isEmpty(),
    check("email", "Email is mandatory").isEmail(),
    check("role", "Role is mandatory"),
    validateFields,
  ],
  updateUsers
);

module.exports = router;
