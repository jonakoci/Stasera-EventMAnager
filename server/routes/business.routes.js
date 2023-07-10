const BusinessController = require ("../controllers/business.controllers")

module.exports = (app) => {
    app.post ("/business/create", BusinessController.createBusiness); 
    app.post ("/business/login", BusinessController.loginBusiness);
    app.get('/businesses', BusinessController.getAllBusinesses);  
    app.get ('business/:id', BusinessController.getOneBusiness);
    app.put ('business/:id', BusinessController.updateBusiness)
};