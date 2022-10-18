const { Comment, User, Photo } = require('../models');

class CommentController {
  static async createComment(req, res) {
    const { comment, PhotoId } = req.body;
    const userId = res.locals.user.id;

    try {
      const commentData = await Comment.create({
        comment,
        PhotoId,
        UserId: userId,
      });

      return res.status(201).json(commentData);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getAllComments(req, res) {
    try {
      const commentDatas = await Comment.findAll({
        include: [
          {
            model: Photo,
            attributes: ['id', 'title', 'caption', 'poster_image_url'],
          },
          {
            model: User,
            attributes: ['id', 'username', 'profile_image_url', 'phone_number'],
          },
        ],
        order: [['id', 'ASC']],
      });

      return res.status(200).json({ comments: commentDatas });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = CommentController;
