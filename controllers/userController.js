const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const { User, sequelize } = require('../models');

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

    // console.log(typeof age);
    const ageInt = parseInt(age);
    const phoneInt = parseInt(phone_number);

    try {
      const userData = await User.create({
        email,
        full_name,
        username,
        password,
        profile_image_url,
        age: ageInt,
        phone_number: phoneInt,
      });

      res.status(201).json({ user: userData });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
        // message: error.errors.map((e) => e.message),
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
          const token = generateToken({
            id: userData.id,
            email: userData.email,
            username: userData.username,
          });
          res.status(200).json({ token });
        } else {
          res.status(401).json({ message: 'Wrong Password' });
        }
      } else {
        res
          .status(401)
          .json({ message: `User with email ${email}  not found` });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    const id = +req.params.id;
    const { email, full_name, username, profile_image_url, age, phone_number } =
      req.body;
    // const { age, phone_number } = +req.body;
    // console.log(typeof age);

    const ageInt = parseInt(age);
    const phoneInt = parseInt(phone_number);

    const data = {
      email,
      full_name,
      username,
      profile_image_url,
      age: ageInt,
      phone_number: phoneInt,
    };

    console.log(data);

    try {
      const userData = await User.update(data, {
        where: {
          id,
        },
        returning: true,
      });

      // console.log(userData);
      return res.status(200).json({ user: userData });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    const id = +req.params.id;

    try {
      await User.destroy({ where: { id } });

      return res
        .status(200)
        .json({ message: 'Your account has been successfully deleted' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
