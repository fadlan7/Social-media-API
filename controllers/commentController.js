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

  static async updateComment(req, res) {
    const id = +req.params.commentId;
    const { comment } = req.body;
    const data = { comment };

    try {
      const commentData = await Comment.update(data, {
        where: { id },
        returning: true,
        // plain: true,
        // nest: true,
      });

      return res.status(200).json(commentData);
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

  static async deleteComment(req, res) {
    const id = +req.params.commentId;

    try {
      await Comment.destroy({ where: { id } });

      return res
        .status(200)
        .json({ message: 'Your comment has been successfully deleted' });
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

module.exports = CommentController;
