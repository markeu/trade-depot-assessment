const { DataTypes } = require("sequelize");

module.exports = (db) => {
  const schema = db.define(
    "Model",
    {
      id: { type: DataTypes.UUID, primaryKey: true },
    },
    {
      timestamps: true,
      tableName: "model",
    }
  );
  return schema;
};
