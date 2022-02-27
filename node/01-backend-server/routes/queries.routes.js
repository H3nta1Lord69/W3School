/**
 * Route: api/general/
 */

const { Router } = require("express");

const { getAllData } = require("../controller/queries.controller");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/:search", validateJwt, getAllData);

router.get("collection/:table/:search", validateJwt, getAllData);

module.exports = router;
