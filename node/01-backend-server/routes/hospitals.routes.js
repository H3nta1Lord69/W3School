/**
 * Route: api/hospitals
 */

const { Router } = require("express");
const { check } = require("express-validator");
const {
  getHospitals,
  createHospitals,
  updateHospitals,
  deleteHospitals,
} = require("../controller/hospitals.controller");
const { validateFields } = require("../middlewares/validate-fields");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/", getHospitals);
router.post("/", [], createHospitals);

router.put("/:id", [], updateHospitals);

router.delete("/:id", deleteHospitals);

module.exports = router;
