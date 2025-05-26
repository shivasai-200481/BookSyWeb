import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards.jsx'
import axios from 'axios';
import { useEffect } from 'react';
const Freebook = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getFreeBooks = async () => {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/book`);
            const books = res.data;
            setBook(books);

    
        }
        getFreeBooks();
    }, [])
    // const freeBooks = list.filter((book) => book.category === 'Free')
    const freeBooks = book.filter((item) => item.category === 'Free');
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className=' max-w-screen-2xl  container mx-auto mt-4 md:px-20 px-4 ' >
                <h1 className='text-2xl font-bold ' >Free Books</h1>
                <Slider {...settings}>
                    {freeBooks.map((item) => {

                        return <Cards item={item} key={item._id} />

                    })}
                </Slider>


            </div>

        </>
    )
}

export default Freebook