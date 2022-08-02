const express = require("express");
const usersRouter = express.Router();
const Users = require("../models/Users");
const Pages = require("../models/Pages");

usersRouter.get("/", (req, res, next) => {
  Users.findAll()
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      console.error("ERROR: ", err);
      next();
    });
});

usersRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Pages.findAll({ where: { authorId: id } })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      console.error("ERROR: ", err);
      next();
    });
});

module.exports = usersRouter;
