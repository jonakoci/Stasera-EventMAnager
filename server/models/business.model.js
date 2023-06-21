const BusinessSchema = new mongoose.Schema({
    business_name: {String, required:[true,"Name is required"]},
    email: {String, required:[true,"Name is required"]},
    password: {String, required:[true,"Name is required"]},
    phone: {Number, required:[true,"Name is required"]},
    address:{String, required:[true,"Name is required"]},
}
,{ timestamps: true });

module.exports = mongoose.model('Business', BusinessSchema);


