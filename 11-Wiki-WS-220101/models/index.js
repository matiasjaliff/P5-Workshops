const Users = require("./Users");
const Pages = require("./Pages");

Users.hasMany(Pages, { foreignKey: "authorId" });
Pages.belongsTo(Users, { as: "author" });

module.exports = { Users, Pages };
