const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
        title: {type: String, required:[true,"Name is required"]},
        imageUrl: {type: String, required:[true,"Image is required"]},
        date: { type : String, required:[true,"Date and Time are required"]},
        guests: {type: String,required:[true,"Date and Time are required"]},
        price: {type: String, required:[true,"Date and Time are required"]}
    },  
{ timestamps: true });

module.exports = mongoose.model('Event', EventSchema);


