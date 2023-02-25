const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://vijay:1234abcd@cluster0.s2lpuzg.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;