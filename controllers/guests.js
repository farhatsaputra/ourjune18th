const { Guest } = require("../models/index");

class GuestController {
  static async getGuests(req, res) {
    try {
      const data = await Guest.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async registerGuest(req, res) {
    const newGuest = {
      name: req.body.name,
      phone: req.body.phone,
      attendance: req.body.attendance,
      address: req.body.address,
    };

    try {
      const data = await Guest.create(newGuest);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: "Interval Server Error" });
    }
  }
}

module.exports = GuestController;
