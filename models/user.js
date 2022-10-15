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
          notEmpty: { args: true, msg: 'Full name is required' },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: 'This email has been used, try another one',
        },
        validate: {
          isEmail: { args: true, msg: 'Invalid email address' },
          notEmpty: { args: true, msg: 'Email is required' },
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: 'This username has been used, try another one',
        },
        validate: {
          notEmpty: { args: true, msg: 'Username is required' },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: { notEmpty: { args: true, msg: 'Password is required' } },
      },
      profile_image_url: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: { args: true, msg: 'Profile image url is required' },
          isUrl: { args: true, msg: 'Invalid URL format' },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: { args: true, msg: 'Age is required' },
          isInt: { args: true, msg: 'Is not a number on age' },
        },
      },
      phone_number: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: { args: true, msg: 'Age is required' },
          isInt: { args: true, msg: 'Is not a number on phone number' },
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
