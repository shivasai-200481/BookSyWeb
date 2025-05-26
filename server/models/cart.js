const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: 'true',
        unique: 'true',
    },
    items: [{

        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            required: true,
        },
        quantity: {
            type: Number,
            default: 1,
        }
    }]
}, { timestamps: true })




const Cart = mongoose.model( 'cart',cartSchema );

module.exports = {
    Cart,
}