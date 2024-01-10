const express = require("express");
const { validatorCustomer, validatorID } = require("../validators/customers");
const router = express.Router();
const {
  createCustomer,
  getCustomer,
  getCustomers,
  // deleteCustomer,
  // updateCustomer,
} = require("../controller/customers");

router.post("/", [validatorCustomer], createCustomer);

router.get("/", [getCustomers]);

router.get("/:id", [validatorID], getCustomer);

// router.put("/:id", [validatorCustomer, validatorID], updateCustomer);
// router.delete("/:id", [validatorID], deleteCustomer);


module.exports = router;
