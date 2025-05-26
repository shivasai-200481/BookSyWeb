import React from 'react';
import { useNavigate } from 'react-router-dom';
const Cards = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={()=> navigate(`/book/${item._id}`) }
            className="bg-white  mx-2 shadow-md rounded-md my-4 hover:scale-105 duration-300 cursor-pointer">
            <div className="w-full h-60">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col justify-between h-48">
                <div>
                    <h2 className="text-lg font-bold flex items-center gap-2">
                        {item.title}
                        <span className="badge badge-secondary">NEW</span>
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">{item.name}</p>
                </div>
                <div className="mt-4 flex justify-between">
                    <span className="badge badge-outline">{item.category}</span>
                    <span className="font-semibold text-green-700">₹{item.price}</span>
                </div>
            </div>
        </div>
    );
};


export default Cards;
