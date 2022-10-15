const { comparePassword } = require('../helpers/bcrypt');
const generateToken = require('../helpers/jwt');
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
    } catch (error) {
      return res.status(400).json({
        // message: err.message,
        message: error.errors.map((e) => e.message),
      });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const userData = await User.findOne({
        where: {
          email,
        },
      });

      if (userData) {
        const isCorrectPassword = comparePassword(password, userData.password);

        if (isCorrectPassword) {
          const payload = generateToken({});
          res.status(200).json({ payload });
        } else {
          res.status(401).json({ message: 'Wrong Password' });
        }
      } else {
        res
          .status(401)
          .json({ message: `User with email ${email}  not found` });
      }
    } catch (error) {
      return res.status(400).json({
        message: error.errors.map((e) => e.message),
      });
    }
  }
}

module.exports = UserController;
