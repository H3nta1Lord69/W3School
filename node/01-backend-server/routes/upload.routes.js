/**
 * Route: api/uploads
 */

const { Router } = require("express");
const expressFU = require("express-fileupload");

const { fileUpload } = require("../controller/uploads.controller");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.use(expressFU());

router.put("/:type/:id", validateJwt, fileUpload);

module.exports = router;
