const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    business_name: {type: String, required:[true,"Name is required"]},
    email: {type: String, required:[true,"Name is required"]},
    password: {type: String, required:[true,"Name is required"]},
    phone: {type: Number, required:[true,"Name is required"]},
    address:{type: String, required:[true,"Name is required"]},
}
,{ timestamps: true });

module.exports = mongoose.model('Business', BusinessSchema);


