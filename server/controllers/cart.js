const { Cart } = require('../models/cart');
const { Book } = require('../models/book');


async function addToCart(req, res) {
    try {
        const userId = req.user._id;
        const { bookId } = req.body;

        const book = await Book.findById(bookId);
        if (!book) return res.status(404).json({ message: "Book not found" });

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [{ bookId }] });
        } else {
            const itemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);
            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += 1;
            }
            else {
                cart.items.push({ bookId });
            }
        }
        await cart.save();
        return res.status(200).json({ message: "Added to cart", cart });



    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
        console.log("Error: ", error);
    }
}


async function getCart(req, res) {
    try {
        const cart = await Cart.findOne({ userId: req.user._id }).populate({ path: 'items.bookId', model: 'book' });

        if (!cart) return res.json({ items: [] });
        return res.json({ cart });

    } catch (err) {
        console.log("Error: ", err);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

async function handleDeleteCart(req, res) {
    try {
        const userId = req.user._id;
        const bookId = req.params.id;
    
        let cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: "Cart Not Found" });
        cart.items = cart.items.filter((item) => item.bookId.toString() !== bookId);
        await cart.save();
    
        return res.status(200).json({ message:"Item Removed",cart });

    } catch (err) {
        console.log("Error: ",err);
        return res.status(500).json({ message:"Internal Server Error" });
    }


}

module.exports = {
    addToCart,
    getCart,
    handleDeleteCart
}