const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://vijay:@Vijay*420#@cluster0.s2lpuzg.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;