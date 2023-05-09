const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/service",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String
//        unique: true // no two users can create two same emails
    },
    contact: {
        type: String,
        unique: true
    },
    isOccupied:{
        type:Boolean
    } 
});


module.exports = mongoose.model("Employee", EmployeeSchema);
