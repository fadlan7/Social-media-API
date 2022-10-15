'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
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
      full_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      password: { type: DataTypes.STRING, validate: { notEmpty: true } },
      profile_image_url: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          isUrl: true,
        },
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
          isInt: true,
        },
      },
      phone_number: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
          isInt: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: (user, opt) => {
          const hashedPassword = hashPassword(user.password);
          user.password = hashedPassword;
        },
      },
    }
  );
  return User;
};
