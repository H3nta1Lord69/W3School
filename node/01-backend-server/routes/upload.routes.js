/**
 * Route: api/uploads
 */

const { Router } = require("express");
const { fileUpload } = require("../controller/uploads.controller");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.put("/:type/:id", validateJwt, fileUpload);

module.exports = router;
