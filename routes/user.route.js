const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');

// GET request to get users listing
router.get('/', userController.getUsers);

//GET request to get user logged
router.get('/me', auth.authorized, userController.getUserLogged);

//GET request to get user by id 
router.get('/:id', auth.authorized, userController.getUserById);

module.exports = router;
