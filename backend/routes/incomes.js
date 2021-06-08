var express = require("express");
var router = express.Router();

const { getDepositsAfterDate } = require("../db/dbHelpers");

router.get("/", getDepositsAfterDate);

router.put("/", function(req, res) {
    console.log("Data received from income form! \n", req.body)
})

module.exports = router;