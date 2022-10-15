const { User } = require('../models');

class UserController {
  static async register(req, res) {
    const {
      email,
      full_name,
      username,
      password,
      profile_image_url,
      age,
      phone_number,
    } = req.body;

    try {
      const userData = await User.create({
        email,
        full_name,
        username,
        password,
        profile_image_url,
        age,
        phone_number,
      });

      res.status(201).json(userData);
    } catch (err) {
      return res.status(400).json({
        // message: err.message,
        sequelizeMessage: err.errors.map((e) => e.message),
      });
    }
  }
}

module.exports = UserController;
