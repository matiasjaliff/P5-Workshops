const express = require("express");
const pagesRouter = express.Router();
const Pages = require("../models/Pages");

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
  Pages.findOne({ where: { urlTitle: urlTitle } })
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
  const { title, content } = req.body;
  Pages.create({ title, content })
    .then((result) => res.status(201).send(result.dataValues))
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
