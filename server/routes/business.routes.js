const BusinessController = require ("../controllers/business.controllers")

module.exports = (app) => {
    app.post ("/business/create", BusinessController.createBusiness); 
    app.post ("/business/login", BusinessController.loginBusiness);
};