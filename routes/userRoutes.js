const userCon = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.param('id', userCon.checkID);

router.route('/').get(userCon.getAllUsers).post(userCon.createUser);

router.route('/:id').get(userCon.getUser).patch(userCon.updateUser).delete(userCon.deleteUser);

module.exports = router;