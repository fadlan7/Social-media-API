const { Photo } = require('../models');

class PhotoController {
  static async createPhoto(req, res) {
    const { title, caption, poster_image_url } = req.body;
    const userId = res.locals.user.id;

    console.log(userId);

    try {
      const photoData = await Photo.create({
        title,
        caption,
        poster_image_url,
        UserId: userId,
      });

      return res.status(201).json({ photoData });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PhotoController;
