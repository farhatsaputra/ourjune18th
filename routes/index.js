const router = require("express").Router();
const UserController = require("../controllers/user");
const GuestController = require("../controllers/guests");
const authentication = require("../middlewares/authentication");

router.post("/login", UserController.login);
router.post("/guest", GuestController.registerGuest);
router.use(authentication);
router.get("/guest", GuestController.getGuests);

module.exports = router;
