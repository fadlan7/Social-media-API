const { User } = require('../models');

async function authorizationUser(req, res, next) {
  const userId = req.params.id;
  const authenticatedUser = res.locals.user;

  console.log(userId);

  try {
    const findUser = await User.findOne({
      where: {
        id: userId,
      },
    });

    console.log(findUser);

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

module.exports = authorizationUser;
