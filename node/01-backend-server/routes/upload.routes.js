/**
 * Route: api/uploads
 */

const { Router } = require("express");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/:type/:id", validateJwt);

module.exports = router;
