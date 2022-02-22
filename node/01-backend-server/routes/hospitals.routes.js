/**
 * Route: api/hospitals
 */

const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/", validateJwt, getUsers);
router.post("/", []);

router.put("/:id", []);

router.delete("/:id", validateJwt);

module.exports = router;
