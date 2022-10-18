const { User, Photo, Comment, SocialMedia } = require('../models');

async function authorizationUser(req, res, next) {
  const userId = req.params.userId;
  const authenticatedUser = res.locals.user;

  // console.log(userId);

  try {
    const findUser = await User.findOne({
      where: {
        id: userId,
      },
    });

    // console.log(findUser);

    if (!findUser) {
      return res
        .status(404)
        .json({ message: `User with id ${userId} not found` });
    }

    if (findUser.id === authenticatedUser.id) {
      return next();
    } else {
      return res.status(403).json({
        message: `User with email ${authenticatedUser.email} does not have permission to access user with id ${userId} `,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function authorizationPhoto(req, res, next) {
  const photoId = req.params.photoId;
  const authenticatedUser = res.locals.user;

  // console.log(photoId);
  // console.log(authenticatedUser.id);

  try {
    const findPhoto = await Photo.findOne({
      where: {
        id: photoId,
      },
    });

    // console.log(findPhoto.UserId);

    if (!findPhoto) {
      return res
        .status(404)
        .json({ message: `Photo with id ${photoId} not found` });
    }

    if (findPhoto.UserId === authenticatedUser.id) {
      return next();
    } else {
      return res.status(403).json({
        message: `User with email ${authenticatedUser.email} does not have permission to access photo with id ${photoId} `,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function authorizationComment(req, res, next) {
  const commentId = req.params.commentId;
  const authenticatedUser = res.locals.user;

  // console.log(commentId);
  // console.log(authenticatedUser.id);

  try {
    const findComment = await Comment.findOne({
      where: {
        id: commentId,
      },
    });

    // console.log(findComment.UserId);

    if (!findComment) {
      return res
        .status(404)
        .json({ message: `Comment with id ${commentId} not found` });
    }

    if (findComment.UserId === authenticatedUser.id) {
      return next();
    } else {
      return res.status(403).json({
        message: `User with email ${authenticatedUser.email} does not have permission to access comment with id ${commentId} `,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function authorizationSocmed(req, res, next) {
  const socmedId = req.params.socialMediaId;
  const authenticatedUser = res.locals.user;

  try {
    const findSocmed = await SocialMedia.findOne({
      where: {
        id: socmedId,
      },
    });

    // console.log(findSocmed.UserId);

    if (!findSocmed) {
      return res
        .status(404)
        .json({ message: `Social media with id ${socmedId} not found` });
    }

    if (findSocmed.UserId === authenticatedUser.id) {
      return next();
    } else {
      return res.status(403).json({
        message: `User with email ${authenticatedUser.email} does not have permission to access social media with id ${socmedId} `,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  authorizationUser,
  authorizationPhoto,
  authorizationComment,
  authorizationSocmed,
};
