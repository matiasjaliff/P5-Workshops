// Required modules
const express = require("express");

// Required own modules
const tweetBank = require("../tweetBank");

const usersRouter = express.Router();

usersRouter.get("/:name", (req, res) => {
  const name = req.params.name;
  const tweets = tweetBank.findAllMatch(name);
  res.status(200).send(tweets);
});

module.exports = usersRouter;
