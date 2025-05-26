import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
    // on mount we will check if the user is still authenticated? or not .
    //because on every render react is reloading and isAutheticated is becoming false again..
    useEffect(() => {


        const checkAuth = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/status`, { withCredentials: true })
                if (res.status === 200 && res.data.authenticated) {
                    setIsAuthenticated(true);
                }
                else {
                    setIsAuthenticated(false);
                }

            } catch (err) {
                console.log("Error:", err);
            }
        }
        checkAuth();
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }} >

            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext);