const UserController = require ("../controllers/user.controllers")

module.exports = (app) => {
    app.post ("/user/create", UserController.createUser); 
    app.post ("/user/login", UserController.loginUser);
};