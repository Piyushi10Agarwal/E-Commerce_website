const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/service',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const elServiceSchema = new mongoose.Schema({
    name: String,
    price: String,
    text: String,
    image: String
});

const Els = mongoose.model("Els", elServiceSchema);

const electricalSchema = new mongoose.Schema({
    name: String,
    services: [elServiceSchema]
});
module.exports =  mongoose.model("El", electricalSchema);



//Example to seed data
//Electrical.create({
//    name: "Switch-Socket",
//    services: [
//        {
//            name: "AC Switchbox Installation",
//            price: "Rs. #",
//            text: "Includes All",
//            image: "../img/ac-switchbox.jpg"
//        },
//        {
//            name: "Switchboard Installation",
//            price: "Rs. #",
//            text: "Upto 6 switches",
//            image: "../img/switchboard-install.jpg"
//        },
//        {
//            name: "Switchboard Repair",
//            price: "Rs. #",
//            text: "Upto 6 switches",
//            image: "../img/switchboard-repair.jpg"
//        },
//        {
//            name: "Switch-Socket Replacement",
//            price: "Rs. #",
//            text: "Includes All",
//            image: "../img/socket-replace.jpg"
//        }
//    ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});
//
//Electrical.create({
//    name: "Fan",
//            services: [
//                {
//                    name: "Ceiling Fan Regulator Replacement",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/ceiling-fan-replace.jpg"
//                },
//                {
//                    name: "Decorative Ceiling Fan Installation",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/decorative-ceiling-fan.jpg"
//                },
//                {
//                    name: "Fan Installation",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/fan-installation.jpg"
//                },
//                {
//                    name: "Fan Repair",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/fan-repair.jpg"
//                },
//                {
//                    name: "Fan Replacement",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/fan-replace.jpg"
//                },
//                {
//                    name: "Fan Uninstallation",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/fan-uninstall.jpg"
//                }
//            ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});
//
//Electrical.create({
//    name: "Light",
//            services: [
//                {
//                    name: "Bulbs-Tubes Replacement",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/bulbs-replace.jpg"
//                },
//                {
//                    name: "Decorative Wall Light-Ceiling Light",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image: "../img/decorative-wall.jpg"
//                },
//                {
//                    name: "Tubelight or Bed Lamp",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image: "../img/tubelight.jpg"
//                }
//                
//            ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});
//
//Electrical.create({
//    name: "MCB-Fuse",
//            services: [
//                {
//                    name: "3 Phase Changeover Switch Installation",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/3-phase.jpg"
//                },
//                {
//                    name: "Fuse Replacemnet",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/fuse-replace.jpg"
//                },
//                {
//                    name: "Single Pole MCB Installation",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/single-pole-mcb.jpg"
//                },
//                {
//                    name: "Sub meter Installation",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/sub-meter.jpg"
//                }
//            ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});
//
//Electrical.create({
//    name: "Wiring",
//            services: [
//                {
//                    name: "Internal Wiring",
//                    price: "Rs. #",
//                    text: "Includes All",
//                    image: "../img/internal-wiring.jpg"
//                },
//                {
//                    name: "Casing Wiring",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image: "../img/casing-wiring.jpg"
//                },
//                {
//                    name: "Wiring without casing",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image: "../img/wiring-without-case.jpg"
//                }
//                
//            ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});