const express = require("express");
const { sendMessage, sendAppointment } = require("./helper.conroller");
const router = express.Router();

router.post("/appointment", sendAppointment);
router.post("/contact", sendMessage);

module.exports = { helperRoutes: router };
