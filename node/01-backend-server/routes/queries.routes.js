/**
 * Route: api/general/:search
 */

const { Router } = require("express");

const { getAllData } = require("../controller/queries.controller");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/:search", validateJwt, getAllData);

module.exports = router;
