const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    businessName: {type: String, required:[true,"Name is required"]},
    email: {type: String, required:[true,"Name is required"]},
    password: {type: String, required:[true,"Name is required"]},
    phoneNr: {type: Number, required:[true,"Name is required"]},
    address:{type: String, required:[true,"Name is required"]},
}
,{ timestamps: true });

module.exports = mongoose.model('Business', BusinessSchema);


