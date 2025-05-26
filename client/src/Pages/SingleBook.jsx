import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
const SingleBook = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const {addToCart} = useCart();
    const handleCart = async ()=>{
        await addToCart(id);
        navigate('/cart');

    }

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/book/${id}`);
                if (res.status === 200) {
                    setBook(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, [id]);

    if (!book) return <div className="text-center mt-20 text-lg">Loading book...</div>;

    return (
        <>
            <Navbar />

            <div className="max-w-2xl mx-auto mt-20 p-6 shadow-xl rounded-xl   bg-white">
                {/* Stylish Heading */}
                <div className='text-center mb-10'>
                    <h1 className='text-4xl font-extrabold text-blue-600'>Book Preview</h1>
                    <p className='text-gray-600 mt-2 text-lg'>Explore the details of your selected book</p>
                </div>
                <div className='flex cursor-pointer flex-col 
    md:flex-row gap-8'>
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-full md:w-1/2 object-cover rounded-lg "
                    />

                    <div className="flex flex-col justify-between md:w-1/2">
                        <div>
                            <h1 className="text-3xl font-bold text-red-500 mb-4">{book.title}</h1>
                            <p className="text-gray-600 mb-2 text-lg">
                                <span className="font-semibold">Category:</span> {book.category}
                            </p>
                            <p className="text-gray-800 font-bold text-xl mb-6">₹{book.price}</p>

                        </div>

                        <button
                            onClick={ handleCart }
                            className="mt-auto bg-black cursor-pointer text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        </>

    );
};

export default SingleBook;
