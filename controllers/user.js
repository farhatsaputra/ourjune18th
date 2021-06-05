const { User } = require("../models");
const { comparePassword } = require("../helpers/password");
const { signToken } = require("../helpers/jwt");

class UserController {
  static async login(req, res) {
    try {
      const data = await User.findOne({
        where: {
          username: req.body.username,
        },
      });

      if (!data) {
        res.status(400).json({
          error: "username tidak ada",
        });
      } else {
        if (comparePassword(req.body.password, data.password)) {
          const access_token = signToken({
            id: data.id,
            username: data.username,
          });
          res.status(200).json({ access_token });
        } else {
          res.status(400).json({
            error: "password salah",
          });
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
