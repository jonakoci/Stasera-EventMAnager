const UserController = require ("../controllers/user.controllers")

module.exports = (app) => {
    app.post ("/user/create", UserController.createUser); 
    app.post ("/user/login", UserController.loginUser);
    app.get('/users', UserController.getAllUsers);  
    app.get ('/user/:id', UserController.getOneUser);
    app.put ('/user/:id', UserController.updateUser)
    
};

// app.post("/user/logout", UserController.logOut); you have to add this above