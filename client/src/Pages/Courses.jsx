import React, { useState } from 'react'
import Navbar from '../components/Navbar'

import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const Courses = () => {
  const [book, setBook] = useState([]);
  useEffect(()=>{

    const getBook = async ()=>{
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/book`);
        
        setBook(res.data);
        
      }  catch (error) {
        toast.error("Something went wrong!")
      }
    }
    getBook();
  },[]);
  return (
    <>
      <Navbar />

      <div className='max-w-screen-2xl mt-4 container mx-auto  md:px-20 px-4' >
        <div className='mt-8' >

          <h1 className='md:text-center text-4xl font-bold' >Start your learning journey with us <span className='text-red-500 text-2xl font-bold '> today! </span></h1>
        </div>
        <div className=' mt-8 ' >
          <p className='text-justify  text-base leading-relaxed' >Welcome to Booksy — your gateway to imagination and knowledge. From timeless classics to trending titles, we’ve got something for every kind of reader. Whether you’re here to learn, escape, or explore, your next favorite book is just a click away. Let’s turn the page together.</p>
        </div>
        <div className='flex justify-center mt-8  items-center' >
          <NavLink to='/' >
            <button className='bg-green-500 cursor-pointer  text-white py-2 px-4 rounded-2xl ' > Back </button>

          </NavLink>

        </div>

        <div className=' mt-12 grid grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-3 '>
          {book.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Courses