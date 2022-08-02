const express = require("express");
const pagesRouter = express.Router();
const Pages = require("../models/Pages");
const Users = require("../models/Users");

pagesRouter.get("/", (req, res, next) => {
  Pages.findAll()
    .then((pages) => res.status(200).send(pages))
    .catch((err) => {
      console.error("ERROR: ", err);
      next();
    });
});

pagesRouter.get("/:urlTitle", (req, res, next) => {
  const urlTitle = req.params.urlTitle;
  Pages.findOne({
    where: { urlTitle: urlTitle },
    include: { model: Users, as: "author" },
  })
    .then((page) => res.status(200).send(page))
    .catch((err) => {
      console.error("ERROR: ", err);
      next();
    });
});

pagesRouter.put("/:urlTitle", (req, res, next) => {
  const urlTitle = req.params.urlTitle;
  const { title, content } = req.body;
  Pages.update({ title, content }, { where: { urlTitle: urlTitle } })
    .then(() => Pages.findOne({ where: { title: title } }))
    .then((page) => res.status(200).send(page))
    .catch((err) => {
      console.error("ERROR: ", err);
      next();
    });
});

pagesRouter.post("/", (req, res, next) => {
  const { name, email, title, content, tags } = req.body;
  Users.findOrCreate({ where: { name, email } })
    .then((data) => {
      const user = data[0];
      Pages.create({ title, content, tags }).then((page) => {
        page.setAuthor(user);
        res.status(201).send(page);
      });
    })
    .catch((err) => {
      console.error(err);
      next();
    });
});

pagesRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  let deletedPage;
  Pages.findOne({ where: { id: id } })
    .then((page) => (deletedPage = page))
    .then(() => Pages.destroy({ where: { id: id } }))
    .then(() => res.status(204).send(deletedPage))
    .catch((err) => {
      console.error("ERROR: ", err);
      next();
    });
});

module.exports = pagesRouter;
