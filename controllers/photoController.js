const { Photo, User, Comment } = require('../models');

class PhotoController {
  static async createPhoto(req, res) {
    const { title, caption, poster_image_url } = req.body;
    const userId = res.locals.user.id;

    // console.log(userId);

    try {
      const photoData = await Photo.create({
        title,
        caption,
        poster_image_url,
        UserId: userId,
      });

      return res.status(201).json(photoData);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getAllPhotos(req, res) {
    try {
      const photoDatas = await Photo.findAll({
        include: [
          {
            model: Comment,
            attributes: ['comment'],
            include: [{ model: User, attributes: ['username'] }],
          },
          {
            model: User,
            attributes: ['id', 'username', 'profile_image_url'],
          },
        ],
        order: [['id', 'ASC']],
      });
      //   { include: [Comment, User] }
      return res.status(200).json({ photos: photoDatas });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updatePhoto(req, res) {
    const id = +req.params.photoId;
    const { title, caption, poster_image_url } = req.body;
    const data = { title, caption, poster_image_url };

    try {
      const photoData = await Photo.update(data, {
        where: { id },
        returning: true,
      });

      console.log(photoData);

      return res.status(200).json({ photo: photoData });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deletePhoto(req, res) {
    const id = +req.params.photoId;

    try {
      await Photo.destroy({ where: { id } });

      return res
        .status(200)
        .json({ message: 'Your photo has been successfully deleted' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PhotoController;
