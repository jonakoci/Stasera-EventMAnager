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

  module.exports.getOneBusiness =(req, res)=>{
    Business.findOne ({_id:req.params.id})
    .then ((business)=>{
      return res.json(business)
    })
    .catch((err) => {
        console.log(err)
        res.json({ err });
      });
};

module.exports.getAllBusinesses = (req, res) => {
        Business.find()
        .then(businesses => {
            console.log(businesses); 
            res.json(businesses);
        })
        .catch(err => {
            console.log(err)
            res.json({err})
        })
}; 

module.exports.updateBusiness = (req, res)=>{
    Business.findOneAndUpdate({_id:req.params.id}, req.body, {   
        new: true,
        runValidators: true})
    .then((updated)=>{
        res.json(updated)
    })
    .catch((err) => {
        res.status(400).json({ err });    
      });
}; 