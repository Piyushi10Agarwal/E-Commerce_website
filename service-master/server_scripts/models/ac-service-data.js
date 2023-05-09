const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/service',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const serviceSchema = new mongoose.Schema({
    name: String,
    price: String,
    text: String,
    image: String
});

const Acs = mongoose.model("Acs", serviceSchema);

const acSchema = new mongoose.Schema({
    name: String,
    services: [serviceSchema]
});
module.exports =  mongoose.model("Ac", acSchema);

    
//Example to seed data
//Ac.create({
//    name: "AC-Service-Repair",
//    services: [
//        {
//            _id:"6410a889220e0334ac6ebf21",
//            name: "AC General Cleaning",
//            price: "Rs. #",
//            text: "Includes All",
//            image: "../img/ac-repair.png"
//        },
//        {
//            _id:"6410a889220e0334ac6ebf22",
//            name: "AC Deep Cleaning",
//            price: "Rs. #",
//            text: "Includes All",
//            image: "../img/ac-repair.png"
//        },
//        {
//            _id:"6410a889220e0334ac6ebf23",
//            name: "AC Repair & Service",
//            price: "Rs. #",
//            text: "Per Visit",
//            image: "../img/ac-repair.png"
//        }
//    ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});
