const express = require("express");
const { validatorCustomer, validatorGetCustomer } = require("../validators/customers");
const router = express.Router();
const {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} = require("../controller/customers");

router.post("/", [validatorCustomer], createCustomer);

router.get("/", [getCustomers]);

router.get("/:id", [validatorGetCustomer], getCustomer);

router.put("/:id", [validatorCustomer, validatorGetCustomer], updateCustomer);

router.delete("/:id", [validatorGetCustomer], deleteCustomer);

module.exports = router;
