const {
  db: { sequelize },
} = require("../configs");

module.exports = {
  Model: require("./Model")(sequelize),
};
