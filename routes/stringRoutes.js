const express = require("express");
const router = express.Router();
const stringOperationsController = require("../controllers/stringOperations");

// reverse a string
router.get("/reversestring", stringOperationsController.reverseString);

module.exports = router;
