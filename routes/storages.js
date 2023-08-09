const express = require("express");
const {
  createItem,
  getItem,
  getItems,
  deleteItem,
} = require("../controller/storages");
const { uploadMiddleware } = require("../utils/handleStorage");
const { validatorID } = require("../validators/customers");
const router = express.Router();

router.post("/", [uploadMiddleware.single("myFile")], createItem);

router.get("/", getItems);

router.get("/:id", [validatorID], getItem);

router.delete("/:id", [validatorID], deleteItem);

module.exports = router;
