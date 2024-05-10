import ApiService from '@/apiCalls.service/apiCalls.service';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
    isAuthenticated: boolean;
    token: string,
    refresh: string,
    user: any,
    loginUser: (data:any) => void;
    logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [refresh, setRefresh] = useState(localStorage.getItem("refresh") || "");
    const navigate = useNavigate();
    const apiService = new ApiService();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
        }
    }, []);

    

    const loginUser = async (data: any) => {
        try {
            const response = await apiService.post('/api/login/', {
                username: data.username,
                password: data.password
            });
            if (response) {
                setToken(response.access);
                setRefresh(response.refresh)
                setIsAuthenticated(true)
                localStorage.setItem("token", response.access);
                localStorage.setItem("refresh", response.refresh);
                navigate("/principal");
            }
        } catch (err) {
            console.error(err);
        }
    };

    const logoutUser = () => {
        if (isAuthenticated) {
            setUser(null);
            setToken("");
            setRefresh("");
            setIsAuthenticated(false);
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");
            navigate("/login");
        }
    };
    return (
        <AuthContext.Provider value={{ isAuthenticated, token,refresh, user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};