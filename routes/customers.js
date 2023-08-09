const express = require("express");
const { validatorCustomer, validatorID } = require("../validators/customers");
const router = express.Router();
const {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} = require("../controller/customers");
const { uploadMiddleware } = require("../utils/handleStorage");

router.post(
  "/",
  [uploadMiddleware.single("myFile"), validatorCustomer],
  createCustomer
);

router.get("/", [getCustomers]);

router.get("/:id", [validatorID], getCustomer);

router.put("/:id", [validatorCustomer, validatorID], updateCustomer);

router.delete("/:id", [validatorID], deleteCustomer);

module.exports = router;
