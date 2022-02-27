const userService = require("../services/user.service");
const apiResponse = require("../utils/api-response.util");
const claim = require("../middleware/claims-principal.middleware");

//get all users
const getUsers = async (req, res) => {
    try {
        const data = await userService.getUsers();
        apiResponse.success(res, data);
    } catch (err) {
        apiResponse.failed(res, err.message);
    }
};

//get user by id
const getUserById = async (req, res) => {
    try {
        const {id: userId} = req.params;
        const data = await userService.getUserById(userId);
        apiResponse.success(res, data);
    } catch (err) {
        apiResponse.failed(res, err.message);
    }
};

const getUserLogged = async (req, res) => {
    try {
        const userLoggedId = claim.getUserLoggedId(req, res);
        const data = await userService.getUserById(userLoggedId);
        apiResponse.success(res, data);
    } catch (err) {
        apiResponse.failed(res, err.message);
    }
};

module.exports = {getUsers, getUserById, getUserLogged};
