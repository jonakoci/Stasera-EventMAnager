const User = require ("../models/user.model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.createUser=(req, res) =>{
    User.create (req.body)
    .then((user)=>{
        res.json(user)
    })
    .catch((err) => {
          res.status(400).json({ err });
      });
};

module.exports.getOneUser =(req, res)=>{
  User.findOne ({_id:req.params.id})
  .then ((user)=>{
    return res.json(user)
  })
  .catch((err) => {
      console.log(err)
      res.json({ err });
    });
};

module.exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email, password: req.body.password })
      .then((user) => {
        if (user) {
          res.json(user);
        } else {
          res.status(400).json({ error: 'Invalid email or password' });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: 'An error occurred' });
      });
  };


module.exports.getAllUsers = (req, res) => {
        // Event.find({}).sort({date:-1}) 
        // could be date or id in the sort 
        User.find()
        .then(users => {
            console.log(users); 
            res.json(users);
        })
        .catch(err => {
            console.log(err)
            res.json({err})
        })
}; 

module.exports.updateUser = (req, res)=>{
    User.findOneAndUpdate({_id:req.params.id}, req.body, {   
        new: true,
        runValidators: true})
    .then((updatedUser)=>{
        res.json(updatedUser)
    })
    .catch((err) => {
        res.status(400).json({ err });    
      });
}; 


// module.exports.createUser=(req, res) =>{
//     User.create (req.body)
//     .then(user => {
//       console.log('register')
//       const userToken = jwt.sign({
//           id: user._id
//       }, process.env.SECRET_KEY)

//       return res.cookie("usertoken", userToken, {
//           httpOnly: true
//       }).json({ msg: "success!", user: user });
//   })
//   .catch(err => {
//       console.log("Error register: "+err)
//       return res.status(400).json(err)
//   });
// };

// module.exports.loginUser = async (req, res) => {
//   const user = await User.findOne({ email: req.body.email })

//         if(user === null) {
//             console.log(user)
//             return res.status(400).json({ errors: { email: { message: "There is no user with this email" } } });
//         }

//         const correctPassword = bcrypt.compare(req.body.password, user.password);

//         if (!correctPassword) {

//             return res.status(400).json({ errors: { password: { message: "The passcode is incorrect" } } });
//         }

//         const userToken = jwt.sign({
//             id: user._id
//         }, process.env.SECRET_KEY);
//             res.cookie("usertoken", userToken, {
//                 httpOnly: true
//             })
//             .json({ msg: "success!" ,user:user});
//   };

//   module.exports.logOut = (req, res)=>{
//     console.log("logOut")
//         res.clearCookie('usertoken');
//         res.sendStatus(200);
//   }