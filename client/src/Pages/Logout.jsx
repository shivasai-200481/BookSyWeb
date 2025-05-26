import React, { useEffect } from "react";
import axios from 'axios';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        const performLogout = async () => {
            try {
                axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/logout`, {}, { withCredentials: true });
                logout();
                navigate('/');
            } catch (error) {
                console.log("Error", error);
            }
        }
        performLogout();
    }, [])

};

export default Logout
