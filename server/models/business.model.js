const BusinessSchema = new mongoose.Schema({
    business_name: {String, required:[true,"Name is required"]},
    email: {String, required:[true,"Name is required"]},
    password: {String, required:[true,"Name is required"]},
    phone: {Number, required:[true,"Name is required"]},
    address:{String, required:[true,"Name is required"]},
    events : {
         type: [Schema.Types.ObjectId],
         ref: 'Events'
    },
    
});

const EventSchema = new mongoose.Schema({
    title: {String, required:[true,"Name is required"]},
    date: {String, required:[true,"Name is required"]},
    guests: String,
    price: String,
});

module.exports = mongoose.model('Business', BusinessSchema);
module.exports = mongoose.model('Events', EventSchema);

