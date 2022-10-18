const { SocialMedia } = require('../models');

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
}

module.exports = SocialMediaController;
