const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: { type: String,required:[true,"Name is required"] },
    username: { type: String,required:[true,"Username is required"] },
    email: { type: String,
        required:[true,"Email is required"]
        // ,validate: {
        //     validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        //     message: "Please enter a valid email"}
        },
    password: { type: String,
        required:[true,"Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]},
    role:{type :String , default:"user"},
}, 

{ timestamps: true });

// UserSchema.virtual('confirmPassword')
//     .get(() => this._confirmPassword)
//     .set(value => this._confirmPassword = value);

// UserSchema.pre('validate', function (next) {
//     if (this.isNew) {
//     if (this.password !== this.confirmPassword) {
//         this.invalidate('confirmPassword', 'Password must match confirm password');
//     }}
//     next();
// });

// UserSchema.pre('save', function (next) {
//     if (this.isNew) {
//     bcrypt.hash(this.password, 10)
//         .then(hash => {
//             this.password = hash;
//             next();
//         })}
//         next();;
// });

module.exports = mongoose.model('User', UserSchema);
