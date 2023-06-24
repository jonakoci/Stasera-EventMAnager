const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: { type: String,required:[true,"Name is required"] },
    username: { type: String,required:[true,"Username is required"] },
    email: { type: String,required:[true,"Email is required"] },
    password: { type: String,required:[true,"Password is required"] },
}, 
{ timestamps: true });

module.exports = mongoose.model('User', UserSchema);
