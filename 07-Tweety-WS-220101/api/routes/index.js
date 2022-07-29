// Required modules
const express = require("express");

// Required own modules
const tweetsRoutes = require("./tweets");
const usersRoutes = require("./users");

const router = express.Router();          // Declares router as an instance of express.Router

router.use("/tweets", tweetsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
