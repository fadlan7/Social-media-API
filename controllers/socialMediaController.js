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
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = SocialMediaController;
