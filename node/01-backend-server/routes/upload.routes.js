/**
 * Route: api/uploads
 */

const { Router } = require("express");
const expressFU = require("express-fileupload");

const { fileUpload, returnImage } = require("../controller/uploads.controller");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.use(expressFU());

router.put("/:type/:id", validateJwt, fileUpload);

router.get("/:type/:image", returnImage);

module.exports = router;
