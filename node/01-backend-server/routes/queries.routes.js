/**
 * Route: api/general/
 */

const { Router } = require("express");

const {
  getAllData,
  getCollectionData,
} = require("../controller/queries.controller");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/:search", validateJwt, getAllData);

router.get("collection/:table/:search", validateJwt, getCollectionData);

module.exports = router;
