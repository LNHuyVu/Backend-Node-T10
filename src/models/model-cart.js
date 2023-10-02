"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carts.init(
    {
      productId: DataTypes.STRING,
      userId: DataTypes.STRING,
      quantity:DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Carts",
    }
  );
  return Carts;
};
