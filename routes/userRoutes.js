const userCon = require("../controllers/userController");
const express = require("express");
const Spot = require("../test");

const router = express.Router();

// router.param('id', userCon.checkID);

router.route('/:id').get(userCon.getUser).patch(userCon.updateUser).delete(userCon.deleteUser);

router.route('/').get(userCon.getAllUsers);

router.route('/spotify').get(Spot.setToken);

router.post('/create', userCon.createUser);

module.exports = router;