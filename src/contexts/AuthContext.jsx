import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get("http://localhost:3000/v1/user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setUser(response.data);
            }).catch(error => {
                console.error("Error fetching user data:", error);
                localStorage.removeItem("token");
            });
        }
    }, []);

    const login = async (email, password) => {
        const response = await axios.post("http://localhost:3000/v1/login", { email, password });
        localStorage.setItem("token", response.data.token);
        const userResponse = await axios.get("http://localhost:3000/v1/user", {
            headers: {
                Authorization: `Bearer ${response.data.token}`
            }
        });
        setUser(userResponse.data);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
