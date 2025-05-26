import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SlClose } from "react-icons/sl";
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext.jsx';
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {


      email: data.email,
      password: data.password
    }
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, userInfo, {
      withCredentials: true
    })
      .then((res) => {
        if (res.data) {
          toast.success('Logged in Successfully!');
          login();
          navigate('/');
        }
        
      })
      .catch((err) => {
        if (err.response.data.message) {
          toast.error(`Error: ${ err.response.data.message }`);
          console.log(err);
        } else {
          toast.error("An unknown error occurred.");
        }
      });
  }
  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className="w-full  max-w-md bg-base-100 shadow-xl rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 relative">
        <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">Login</h3>
        <NavLink to='/'>
          <p className='absolute right-10 top-4 text-2xl'><SlClose /></p>

        </NavLink>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <NavLink to="/SignUp" className="text-blue-600 hover:underline">
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
