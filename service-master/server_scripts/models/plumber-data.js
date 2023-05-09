const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/service',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const plServiceSchema = new mongoose.Schema({
    name: String,
    price: String,
    text: String,
    image: String
});

const Pls = mongoose.model("Pls", plServiceSchema);

const plumberSchema = new mongoose.Schema({
    name: String,
    services: [plServiceSchema]
});
module.exports =  mongoose.model("Pl", plumberSchema);



//Example to seed data
//Plumber.create({
//    name: "Basin-Sink",
//    services: [
//        {
//            name: "Waste Pipe",
//            price: "Rs. #",
//            text: "Includes All",
//            image:"../img/waste-pipe.jpg"
//        },
//        {
//            name: "Washbasin repair",
//            price: "Rs. #",
//            text: "Includes All",
//            image:"../img/wash-basin.jpg"
//        },
//        {
//            name: "Wash Basin & Sink Installation",
//            price: "Rs. #",
//            text: "Doesn't includes Roof Drilling",
//            image:"../img/wash-basin-and-sink-repair.jpg"
//        }
//    ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});

