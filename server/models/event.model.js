const EventSchema = new mongoose.Schema({
        title: {String, required:[true,"Name is required"]},
        date: { type : Date, default: Date.now, required:[true,"Date and Time is required"]},
        guests: {String},
        price: {String}
    },  
{ timestamps: true });

module.exports = mongoose.model('Event', EventSchema);


