const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect("mongodb://localhost/service",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const cartOrder = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    quantity: Number
});

const UserSchema = new mongoose.Schema({
    email: {
        type: String
//        unique: true // no two users can create two same emails
    },
    username: {
        type: String,
        unique: true
    },
    googleId: String,
    password: String,
    orders: [cartOrder]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);