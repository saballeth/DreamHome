import ApiService from '@/apiCalls.service/apiCalls.service';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
    isAuthenticated: boolean;
    token: string,
    user: any,
    loginUser: (data:any) => void;
    logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [refresh, setRefresh] = useState(localStorage.getItem("refresh") || "");
    const navigate = useNavigate();
    const apiService = new ApiService();

    const loginUser = async (data: any) => {
        try {
            const response = await apiService.post('/api/login/', {
                username: data.username,
                password: data.password
            });
            if (response) {
                // setUser(response.data.user);
                setToken(response.token);
                setRefresh(response.refresh)
                setIsAuthenticated(true)
                localStorage.setItem("token", response.token);
                localStorage.setItem("refresh", response.refresh);
                navigate("/principal");
            }
        } catch (err) {
            console.error(err);
        }
    };

    const logoutUser = () => {
        setUser(null);
        setToken("");
        setRefresh("");
        setIsAuthenticated(false)
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, user, loginUser, logoutUser }}>
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