const mongoose = require('mongoose');
require('dotenv').config();

async function connectToMongoDb() {
    try {
        await mongoose.connect(process.env.MONGODBURL);
        console.log("MongoDB Connected.");
    }
    catch (error) {
        console.log("Error connecting to MongoDB: ",error);
    }

} 

module.exports = {
    connectToMongoDb,
}