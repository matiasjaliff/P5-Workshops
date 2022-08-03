const Sequelize = require("sequelize");
const { marked } = require("marked");
const db = require("../db");

class Pages extends Sequelize.Model {
  static findByTag = function (tag) {
    return Pages.findAll({
      where: {
        tags: {
          [Sequelize.Op.overlap]: [tag],
        },
      },
    });
  };
  findSimilar() {
    return Pages.findAll({
      where: {
        id: {
          [Sequelize.Op.not]: this.id,
        },
        tags: {
          [Sequelize.Op.overlap]: this.tags,
        },
      },
    });
  }
}
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
    tags: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
      set(tags) {
        this.setDataValue("tags", makeTags(tags));
      },
    },
    route: {
      type: Sequelize.VIRTUAL,
      get() {
        return `/wiki/${this.urlTitle}`;
      },
    },
    renderedContent: {
      type: Sequelize.VIRTUAL,
      get() {
        return marked(this.getDataValue("content"));
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

function makeTags(tags) {
  tags = tags || [];
  if (typeof tags === "string") {
    tags = tags.split(",").map((tag) => tag.trim().toLowerCase());
  }
  return tags;
}

module.exports = Pages;
