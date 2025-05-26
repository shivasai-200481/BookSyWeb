import React from 'react'
import book from '../assets/book.png'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ' >
                <div className=' w-full md:w-1/2  mt-12 md:mt-20' >
                    <div className='space-y-8' >
                        <div>

                            <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                                Discover Your Next Favorite <span className='text-red-500'>Book Today!!</span>
                            </h1>
                        </div>
                        <div>

                            <p className='text-gray-700 text-justify text-base leading-relaxed'>
                                Explore a wide collection of books across genres  from fiction to self-help, academics to biographies. Whether you're a student, a casual reader, or a lifelong learner.
                            </p>
                        </div>
                        <div>


                            {/* Email Input */}

                            {/* <label className="input validator focus-within:ring-0 focus-within:border-transparent">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email"
                                    placeholder="mail@site.com"
                                    required
                                    className='grow outline-none' />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div> */}
                        </div>

                        {/* <button className='px-4 py-2 bg-violet-400 text-white rounded-xl cursor-pointer ' >Secondary</button> */}


                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-20'>
                    <img
                        src={book}       
                        alt="Book"
                        className='w-[400px] md:w-[400px] rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer'
                    />  
                </div>


            </div>



        </>
    )
}

export default Banner