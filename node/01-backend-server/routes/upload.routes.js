/**
 * Route: api/uploads
 */

const { Router } = require("express");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/:search", validateJwt, getAllData);

module.exports = router;
