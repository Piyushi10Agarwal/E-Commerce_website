const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/service',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const crServiceSchema = new mongoose.Schema({
    name: String,
    price: String,
    text: String,
    image: String
});

const Crs = mongoose.model("Crs", crServiceSchema);

const carpentorSchema = new mongoose.Schema({
    name: String,
    services: [crServiceSchema]
});
module.exports =  mongoose.model("Cr", carpentorSchema);




//Example to seed data
//    name: "Balcony",
//Carpentor.create({
//    services: [
//        {
//            name: "Pigeon Net Installation",
//            price: "Rs. #",
//            text: "Rs. # for every square feet.",
//            image:"../img/pigeon-install.jpg"
//        },
//        {
//            name: "Clothes Ceiling Hanger Installation",
//            price: "Rs. #",
//            text: "Includes Roof Drilling",
//            image:"../img/cothes-ceiling-hanger.jpg"
//        },
//        {
//            name: "Clothes Wall Hanger Installation",
//            price: "Rs. #",
//            text: "Doesn't includes Roof Drilling",
//            image:"../img/clothes-wall-hanger.jpg"
//        }
//    ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});
//
//Carpentor.create({
//    name: "Bed",
//            services: [
//                {
//                    name: "Bed Support Repair",
//                    price: "Rs. #",
//                    text: "Includes whole support repair",
//                    image:"../img/bed-support-repair.jpg"
//                },
//                {
//                    name: "Bed Legs-Headboard Repair",
//                    price: "Rs. #",
//                    text: "Includes repair of either single leg or headboard",
//                    image:"../img/bed-legs.jpg"
//                }
//            ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});
//
//Carpentor.create({
//    name: "Cupboard-Drawer",
//            services: [
//                {
//                    name: "Cubboard Hinge",
//                    price: "Rs. #",
//                    text: "Installation/Repair",
//                    image:"../img/cupboard-hinge.jpg"
//                },
//                {
//                    name: "Channel Repair",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image:"../img/channel-repair.jpg"
//                },
//                {
//                    name: "Channel Replacement",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image:"../img/channel-replacement.jpg"
//                },
//                {
//                    name: "Handle Replacement",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image:"../img/handle-replacement.jpg"
//                },
//                {
//                    name: "Lock Installation",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image:"../img/lock-installation.jpg"
//                },
//                {
//                    name: "Lock Replacement",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image:"../img/lock-replacement.jpg"
//                },
//                {
//                    name: "Lock Repair",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image:"../img/lock-repair.jpg"
//                },
//                {
//                    name: "Sliding Door Repair",
//                    price: "Rs. #",
//                    text: "Includes all",
//                    image:"../img/sliding-door-repair.jpg"
//                },
//                {
//                    name: "Shelf Installation",
//                    price: "Rs. #",
//                    text: "Wooden/Glass Shelf Installation using clamps",
//                    image:"../img/shelf-installation.jpg"
//                }
//                
//            ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});
//
//Carpentor.create({
//    name: "Door",
//            services: [
//                {
//                    name: "Accessory Installation",
//                    price: "Rs. #",
//                    text: "Any one of Latch,Chain,Stopper,Magnet",
//                    image:"../img/accesary.jpg"
//                },
//                {
//                    name: "Door Installation",
//                    price: "Rs. #",
//                    text: "For Wooden Doors Only",
//                    image:"../img/door-install.jpg"
//                }
//            ]
//}, (err, item)=>{
//    if(err){
//        console.log(err);
//    }
//});