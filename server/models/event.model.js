const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
        title: {type: String, required:[true,"Name is required"]},
        imageUrl: {type: String, required:[true,"Image is required"]},
        date: { type : String, required:[true,"Date and Time are required"]},
        guests: {type: String},
        price: {type: String}
    },  
{ timestamps: true });

module.exports = mongoose.model('Event', EventSchema);


