import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

const Cart = () => {
    const { cart, fetchCart, removeFromCart } = useCart();

    useEffect(() => {
        fetchCart();
    }, []);

    if (cart.length === 0) {
        return (
            <>
                <Navbar />
                <div className="text-center mt-20 text-xl font-semibold text-gray-600">
                    Your Cart is empty! Add some books to see them here.
                </div>
            </>
        );
    }

    return (   
        <>  
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 py-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10">
                    Your Cart
                </h1>

                <div className="space-y-6">
                    {cart.map((item) => (
                        <div
                            key={item.bookId._id}
                            className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 bg-white p-5 shadow-md rounded-lg"
                        >
                            {/* Book Image */}
                            <div className="w-32 h-40 md:w-24 md:h-32 flex-shrink-0 overflow-hidden rounded">
                                <img
                                    src={item.bookId.image}
                                    alt={item.bookId.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Book Info */}
                            <div className="flex-1 text-center md:text-left">
                                <p className="text-xl font-semibold text-gray-800">{item.bookId.name}</p>
                                <p className="text-md text-gray-600">{item.bookId.title}</p>
                            </div>

                            {/* Quantity */}
                            <div className="text-center">
                                <p className="text-gray-700 font-medium">Quantity</p>
                                <p className="text-lg font-bold">{item.quantity}</p>
                            </div>

                            {/* Remove Button */}
                            <div>
                                <button
                                    onClick={() => removeFromCart(item.bookId._id)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer  hover:bg-blue-700">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cart;
