const Sequelize = require("sequelize");
const db = require("../db");

class Pages extends Sequelize.Model {}
Pages.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    urlTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    route: {
      type: Sequelize.VIRTUAL,
      get() {
        return `/wiki/${this.urlTitle}`;
      },
    },
  },
  { sequelize: db, modelName: "pages" }
);

Pages.beforeValidate("createUrlTitle", (pages, options) => {
  const title = pages.title;
  const generateUrlTitle = (title) => {
    if (title) {
      // Remueve todos los caracteres que no son alfanuméricos y convierte los espacios en guiones.
      return title.replace(/\s+/g, "_").replace(/\W/g, "");
    } else {
      // Genera de forma aleatoria un String de 5 caracteres.
      return Math.random().toString(36).substring(2, 7);
    }
  };
  pages.urlTitle = generateUrlTitle(title);
});

module.exports = Pages;
