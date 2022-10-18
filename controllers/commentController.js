const { Comment, User } = require('../models');

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
}

module.exports = CommentController;
