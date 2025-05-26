const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
}, { timestamps: true })


const Book = mongoose.model('book',bookSchema);
module.exports = {
    Book
}