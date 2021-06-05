"use strict";
const { Model } = require("sequelize");
const { generatePassword } = require("../helpers/password");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (instance, options) => {
          instance.password = generatePassword(instance.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
