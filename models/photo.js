'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);

      this.hasMany(models.Comment);
    }
  }
  Photo.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { args: true, msg: 'Title is required' },
        },
      },
      caption: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: { args: true, msg: 'Caption is required' },
        },
      },
      poster_image_url: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: { args: true, msg: 'Poster image url is required' },
          isUrl: { args: true, msg: 'Invalid URL format' },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Photo',
    }
  );
  return Photo;
};
