const express = require("express");
const tweetsRouter = express.Router();

const client = require("../db");

//Escribí acá la ruta para obtener todos los tweets
tweetsRouter.get("/", (req, res, next) => {
  const query =
    "SELECT *, tweets.id AS tid FROM tweets INNER JOIN users ON tweets.user_id = users.id";
  client.query(query, (err, result) => {
    if (err) return next(err);
    const tweets = result.rows;
    res.status(200).send(tweets);
  });
});

//Escribí acá la ruta para obtener un tweet en particular
tweetsRouter.get("/:id", (req, res, next) => {
  const tweetId = req.params.id;
  const query =
    "SELECT *, tweets.id AS tid FROM tweets INNER JOIN users ON tweets.user_id = users.id WHERE tweets.id = $1";
  client.query(query, [tweetId], (err, result) => {
    if (err) return next(err);
    const tweet = result.rows[0];
    res.status(200).send(tweet);
  });
});

//Escribí acá la ruta para eliminar un tweet
tweetsRouter.delete("/:id", (req, res, next) => {
  let tweet;
  const tweetId = req.params.id;
  const query = "SELECT *, tweets.id AS tid FROM tweets WHERE tweets.id = $1";
  const deleteQuery = "DELETE FROM tweets WHERE tweets.id = $1";
  client.query(query, [tweetId], (err, result) => {
    if (err) return next(err);
    tweet = result.rows[0];
    client.query(deleteQuery, [tweetId], (err, result) => {
      if (err) return next(err);
      res.status(202).send(tweet);
    });
  });
});

//Escribí acá la ruta para crear un tweet
tweetsRouter.post("/", (req, res, next) => {
  let userId;
  const queryBaseUser = "INSERT INTO users (name) VALUES ($1) RETURNING id";
  client.query(queryBaseUser, [req.body.name], (err, result) => {
    if (err) return next(err);
    userId = result.rows[0].id;
    const queryBaseTweet =
      "INSERT INTO tweets (user_id, content, imgurl) VALUES ($1, $2, $3) RETURNING id";
    client.query(
      queryBaseTweet,
      [userId, req.body.content, req.body.imgurl],
      (err, result) => {
        if (err) return next(err);
        const baseQuery =
          "SELECT *, tweets.id as tid FROM tweets INNER JOIN users ON users.id=tweets.user_id WHERE tweets.id=$1";
        client.query(baseQuery, [result.rows[0].id], (err, result) => {
          if (err) return next(err);
          const tweet = result.rows[0];
          res.status(201).send(tweet);
        });
      }
    );
  });
});

module.exports = tweetsRouter;
