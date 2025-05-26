import React from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Protected = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/protected`, { withCredentials: true })
                setAuth(res.data.ok);
            } catch (err) {
                setAuth(false);
            } finally {
                setLoading(false); // ✅ End of check
            }
        }

        checkAuth();

    }, [])
    if (loading) return <div>Loading...</div>;

    if (!auth) {
        return <Navigate to='/login' replace />
    }
    return children;

}

export default Protected