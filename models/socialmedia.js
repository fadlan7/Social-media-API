'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
    }
  }
  SocialMedia.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { args: true, msg: 'Name is required' },
        },
      },
      social_media_url: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { args: true, msg: 'Social media url is required' },
          isUrl: { args: true, msg: 'Invalid URL format' },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'SocialMedia',
    }
  );
  return SocialMedia;
};
