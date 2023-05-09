const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/service',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const orderSchema = new mongoose.Schema({
    name: String,
    price: String,
    quantity: Number,
    email: String,
});

module.exports = mongoose.model('Order', orderSchema);