const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
        title: {type: String, required:[true,"Title is required"]},
        imageUrl: {type: String, required:[true,"Image is required"]},
        date: { type : Date, required:[true,"This field is required"]},
        guests: {type: String,required:[true,"This field is required"]},
        price: {type: String, required:[true,"This field is required"]}
    },  
{ timestamps: true });

module.exports = mongoose.model('Event', EventSchema);


