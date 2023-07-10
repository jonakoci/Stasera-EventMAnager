const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    businessName: {type: String, required:[true,"Name is required"]},
    email: {type: String, required:[true,"Name is required"]
    // ,validate: {
    //     validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
    //     message: "Please enter a valid email"}
    },
    password: {type: String, 
        required:[true,"Name is required"], 
        minlength: [8, "Password must be 8 characters or longer"]},
    phoneNr: {type: Number, required:[true,"Name is required"]},
    address:{type: String, required:[true,"Name is required"]},
    role: {type :String , default:"business"}
}
,{ timestamps: true });

// BusinessSchema.virtual('confirmPassword')
//     .get(() => this._confirmPassword)
//     .set(value => this._confirmPassword = value);

// BusinessSchema.pre('validate', function (next) {
//     if (this.isNew) {
//     if (this.password !== this.confirmPassword) {
//         this.invalidate('confirmPassword', 'Password must match confirm password');
//     }}
//     next();
// });

// BusinessSchema.pre('save', function (next) {
//     if (this.isNew) {
//     bcrypt.hash(this.password, 10)
//         .then(hash => {
//             this.password = hash;
//             next();
//         })}
//         next();;
// });

module.exports = mongoose.model('Business', BusinessSchema);


