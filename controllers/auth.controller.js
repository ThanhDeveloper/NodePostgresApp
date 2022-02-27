const authService = require("../services/auth.service");
const apiResponse = require("../utils/api-response.util");

//signup new user
const signup = async (req, res) => {
    try {
        await authService.signup(req.body.username, req.body.password);
        res.status(201).send('')
    } catch (err) {
        apiResponse.failed(res, err.message);
    }
};

//login with username and password
const login = async (req, res) => {
    try {
        const userLogin = await authService.login(req.body.username, req.body.password);
        apiResponse.success(res, userLogin);
    } catch (err) {
        apiResponse.failed(res, err.message);
    }
};

module.exports = {signup, login};