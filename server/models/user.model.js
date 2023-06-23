const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: { type: String,required:[true,"Name is required"] },
    username: { type: String,required:[true,"Name is required"] },
    email: { type: String,required:[true,"Name is required"] },
    password: { type: String,required:[true,"Name is required"] },
}, 
{ timestamps: true });

module.exports = mongoose.model('User', UserSchema);
