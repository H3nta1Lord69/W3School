/**
 * Route: api/users
 */

const { Router } = require("express");
const { getUsers, createUsers } = require("../controller/users.controller");

const router = Router();

router.get("/", getUsers);
router.post("/", createUsers);

module.exports = router;
