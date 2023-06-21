const Business = require ("../models/business.model")

module.exports.createBusiness=(req, res) =>{
    Business.create (req.body)
    .then((business)=>{
        res.json(business)
    })
    .catch((err) => {
          res.status(400).json({ err });
      });
};

module.exports.loginBusiness = (req, res) => {
    Business.findOne({ email: req.body.email, password: req.body.password })
      .then((business) => {
        if (business) {
          res.json(business);
        } else {
          res.status(400).json({ error: 'Invalid email or password' });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: 'An error occurred' });
      });
  };

