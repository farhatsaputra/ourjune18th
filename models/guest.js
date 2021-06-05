"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Guest.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name cannot be empty",
          },
        },
      },
      phone: DataTypes.STRING,
      attendance: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Attedance cannot be empty",
          },
        },
      },
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Guest",
    }
  );
  return Guest;
};
