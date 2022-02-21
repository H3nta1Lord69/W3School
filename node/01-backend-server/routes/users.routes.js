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
  deleteUsers,
} = require("../controller/users.controller");
const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/", validateJwt, getUsers);
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

router.delete("/:id", deleteUsers);

module.exports = router;
