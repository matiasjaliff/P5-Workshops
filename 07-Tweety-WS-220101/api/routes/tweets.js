// Required modules
const express = require("express");

// Required own modules
const tweetBank = require("../tweetBank");

const tweetsRouter = express.Router();

tweetsRouter.get("/", (req, res) => {
  const tweets = tweetBank.list();
  res.status(200).send(tweets);
});

tweetsRouter.post("/", (req, res) => {
  const { name, content, imgURL } = req.body;
  const tweet = tweetBank.add(name, content, imgURL);
  res.status(201).send(tweet);
});

tweetsRouter.get("/:id", (req, res) => {
  const tweetId = parseInt(req.params.id);
  const tweet = tweetBank.findOne(tweetId);
  res.status(200).send(tweet);
});

tweetsRouter.delete("/:id", (req, res) => {
  const tweetId = parseInt(req.params.id);
  const tweet = tweetBank.findOne(tweetId);
  tweetBank.remove(tweetId);
  res.status(202).send(tweet);
});

module.exports = tweetsRouter;
