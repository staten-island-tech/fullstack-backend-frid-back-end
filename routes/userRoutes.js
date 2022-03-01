const userCon = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.param('id', userCon.checkID);

router.route('/:id').get(userCon.getUser).patch(userCon.updateUser).delete(userCon.deleteUser);

router.route('/').get(userCon.getAllUsers);

router.post('/create', userCon.createUser);


module.exports = router;