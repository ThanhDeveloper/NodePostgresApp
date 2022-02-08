var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController');

// GET request to get users listing
router.get('/', userController.getUsers);

//GET request to get user by id 
router.get('/:id', userController.getUserById);

// POST request for creating user.
router.post('/create', userController.createtUser);

// PATCH request to update user 
router.patch('/:id', userController.updatetUser);

// POST request to delete Book.
router.delete('/:id', userController.deletetUser);

module.exports = router;
