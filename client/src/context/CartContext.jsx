import { useState, createContext, useContext } from "react";
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const fetchCart = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/cart/`, { withCredentials: true });
            setCart(res.data.cart?.items || []);

        } catch (err) {
            console.log("Failed to Fetch the cart", err);
        }  
    }
    const addToCart = async (bookId) => {
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/cart/add`, { bookId }, { withCredentials: true });
            fetchCart();  

        } catch (err) {
            console.log("Failed to add to Cart", err);
        }

    }
    const removeFromCart = async (bookId) => {
        try {
            
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/cart/remove/${bookId}`,{withCredentials:true});
            fetchCart();
        } catch (error) {
            console.log('Error',error);
        }
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, fetchCart, removeFromCart }} >
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => useContext(CartContext);