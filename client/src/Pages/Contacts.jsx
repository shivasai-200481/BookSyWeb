import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {

    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    }
    try {
      axios.post(`${import.meta.env.VITE_GETFORMS_URL}`, userInfo);    
      toast.success("Your Response submitted Successfully");
      reset();
    } catch (error) {
      toast.error("Error Sending you details!!");
    }

  }  
  return ( 
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Want to reach us? <span className="text-green-600">We'd love to hear from you!</span>
          </h1>
        </div>

        <p className="text-2xl text-center font-bold  text-gray-600 mt-2">Contact Us!</p>
        <div className="p-8 bg-violet-100  rounded-3xl shadow-md max-w-xl mx-auto">
          <form className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            //
            //method="POST"
          >
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-2 rounded-lg  bg-white text-black focus:outline-none focus:ring-2 focus:ring-violet-400"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}

            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg   bg-white text-black focus:outline-none focus:ring-2 focus:ring-violet-400"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}

            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Message</label>
              <input
                type="text"
                placeholder="Enter your query"
                className="p-2 rounded-lg  bg-white text-black focus:outline-none focus:ring-2 focus:ring-violet-400"
                name="message"
                {...register("message", { required: true })}
              />
              {errors.message && <span>This field is required</span>}

            </div>
            <input type="submit"
              className="w-full cursor-pointer  py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300"
              value='Send'
            />

          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
