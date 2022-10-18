const { SocialMedia, User } = require('../models');

class SocialMediaController {
  static async createSocmed(req, res) {
    const { name, social_media_url } = req.body;
    const userId = res.locals.user.id;

    try {
      const socmedData = await SocialMedia.create({
        name,
        social_media_url,
        UserId: userId,
      });

      return res.status(201).json(socmedData);
    } catch (error) {
      if (
        error.name === 'SequelizeValidationError' ||
        error.name === 'SequelizeUniqueConstraintError'
      ) {
        return res.status(400).json({
          message: error.errors.map((e) => e.message),
        });
      }

      return res.status(500).json({ message: error.message });
    }
  }

  static async getAllSocmed(req, res) {
    try {
      const socmedDatas = await SocialMedia.findAll({
        include: [
          {
            model: User,
            attributes: ['id', 'username', 'profile_image_url'],
          },
        ],
        order: [['id', 'ASC']],
      });

      return res.status(200).json({ social_medias: socmedDatas });
    } catch (error) {
      if (
        error.name === 'SequelizeValidationError' ||
        error.name === 'SequelizeUniqueConstraintError'
      ) {
        return res.status(400).json({
          message: error.errors.map((e) => e.message),
        });
      }

      return res.status(500).json({ message: error.message });
    }
  }

  static async updateSocmed(req, res) {
    const id = +req.params.socialMediaId;
    const { name, social_media_url } = req.body;
    const data = { name, social_media_url };

    try {
      const socmedData = await SocialMedia.update(data, {
        where: { id },
        returning: true,
      });

      return res.status(200).json({ social_media: socmedData });
    } catch (error) {
      if (
        error.name === 'SequelizeValidationError' ||
        error.name === 'SequelizeUniqueConstraintError'
      ) {
        return res.status(400).json({
          message: error.errors.map((e) => e.message),
        });
      }

      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteSocmed(req, res) {
    const id = +req.params.socialMediaId;

    try {
      await SocialMedia.destroy({ where: { id } });

      return res
        .status(200)
        .json({ message: 'Your social media has been successfully deleted' });
    } catch (error) {
      if (
        error.name === 'SequelizeValidationError' ||
        error.name === 'SequelizeUniqueConstraintError'
      ) {
        return res.status(400).json({
          message: error.errors.map((e) => e.message),
        });
      }

      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = SocialMediaController;
