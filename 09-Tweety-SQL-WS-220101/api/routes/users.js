const express = require("express");
const usersRouter = express.Router();

const client = require("../db");

//Escribí acá la ruta para obtener los tweets de un usuario en particular
usersRouter.get("/:name", (req, res, next) => {
  const userName = req.params.name;
  console.log(userName);
  const query =
    "SELECT *, tweets.id AS tid FROM tweets INNER JOIN users ON tweets.user_id = users.id WHERE users.name = $1";
  client.query(query, [userName], (err, result) => {
    if (err) return next(err);
    const tweets = result.rows;
    res.status(200).send(tweets);
  });
});

module.exports = usersRouter;
