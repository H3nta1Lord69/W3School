/**
 * Route: api/doctors
 */

const { Router } = require("express");
const { check } = require("express-validator");
const {
  getDoctors,
  createDoctors,
  updateDoctors,
  deleteDoctors,
} = require("../controller/doctors.controller");
const { validateFields } = require("../middlewares/validate-fields");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/", getDoctors);
router.post(
  "/",
  [
    validateJwt,
    check("name", "Hospital name is mandatory.").not().isEmpty(),
    check("hospital", "Id Hospital must be valid.").isMongoId(),
    validateFields,
  ],
  createDoctors
);

router.put(
  "/:id",
  [
    validateJwt,
    check("name", "Hospital name is mandatory.").not().isEmpty(),
    check("hospital", "Id Hospital must be valid.").isMongoId(),
    validateFields,
  ],
  updateDoctors
);

router.delete("/:id", validateJwt, deleteDoctors);

module.exports = router;
