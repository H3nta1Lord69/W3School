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
router.post(
  "/",
  [
    validateJwt,
    check("name", "Hospital name is mandatory.").not().isEmpty(),
    validateFields,
  ],
  createHospitals
);

router.put(
  "/:id",
  [
    validateJwt,
    check("name", "Hospital name is mandatory.").not().isEmpty(),
    validateFields,
  ],
  updateHospitals
);

router.delete("/:id", validateJwt, deleteHospitals);

module.exports = router;
