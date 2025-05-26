import React from 'react';
import Login from './Login';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { NavLink,useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';

const SignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {

            name:data.name,
            email:data.email,
            password:data.password
        }
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup`,userInfo)
        .then((res)=>{
            if(res.data) {
                toast.success('Signed in Successfully!');
                navigate('/login');

            }
        })
        .catch((err)=>{
            toast.error("Error: ", err);
            
        })

    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white relative rounded-2xl p-8 w-96 shadow-md">
                <h3 className="font-bold text-2xl text-center text-gray-800 mb-6">
                    Create an Account
                </h3>
                <button
                    

                    className="absolute top-4 right-4  cursor-pointer hover:text-black text-4xl "

                >
                    
                    <NavLink to='/'>

                        <IoIosCloseCircleOutline />

                    </NavLink>
                </button>
                <form action="" onSubmit={handleSubmit(onSubmit)}  >


                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-600">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
                        >
                            Sign Up
                        </button>

                        <p className="text-sm text-center text-gray-600 mt-4">
                            Already have an account?{' '}
                            <button

                                className="text-blue-600 hover:underline cursor-pointer">
                                <NavLink to='/login'>
                                    Login

                                </NavLink>
                            </button>

                        </p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;
