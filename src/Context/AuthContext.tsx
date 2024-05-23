import ApiService from '@/apiCalls.service/apiCalls.service';
import AlertExito from '@/components/Alert/AlertExito';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
    isAuthenticated: boolean;
    token: string,
    refresh: string,
    user: any,
    loginUser: (data:any) => void;
    registerUser: (data:any) => void;
    logoutUser: () => void;
    refreshToken: () => void;
    inmueblePorUsuario: any;
    setInmueblePorUsuario: any;
    favoritosDB:any
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const tokenValue = localStorage.getItem("token");
    const [isAuthenticated, setIsAuthenticated] = useState(tokenValue !== null);    
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");    
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [refresh, setRefresh] = useState(localStorage.getItem("refresh") || "");
    const [inmueblePorUsuario, setInmueblePorUsuario] = useState<any[]>(() => {
        const storedData = localStorage.getItem("inmueblePorUsuario");
        return storedData ? JSON.parse(storedData) : {};
    });
    const [favoritosDB, setFavoritosDB] = useState<any>(() => {
        const storedData = localStorage.getItem("favoritosDB");
        return storedData ? JSON.parse(storedData) : {};
    });
    const navigate = useNavigate();
    const apiService = new ApiService();
    let userData: any = {};

    const refreshToken = async () => {
        try {
            if (typeof user === 'string') {
                userData = JSON.parse(user);
            } else {
                userData = user;
            }
            const response = await apiService.post('/token/refresh', { refreshToken: userData?.refresh });
            setToken(response.access);
            setRefresh(response.refresh);
            localStorage.setItem("token", response.access);
            localStorage.setItem("refresh", response.refresh);
            userData.access = response.access;
            userData.refresh = response.refresh;
            setUser(userData);
        } catch (error) {
            console.error(error);
            setUser(null);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            refreshToken();
        }, 120 * 60 * 1000)
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
        } 
    }, []);

    const getFavoritos = async (id:number,token:any) => {
        // { id:data.id, url:data.url, selected: true, nombre:data.nombre, precio:data.precio }
        const apiServiceToken = new ApiService(token);
        const responseFavoritos:any[] = await apiServiceToken.get(`/api/inmueblesPorUsuario/${id}/obtenerPorUsuario/`);
        const favoritos = responseFavoritos.map(item => ({
            idInmueblePorUsuario: item.idInmueblePorUsuario,
            idInmueble: item.inmueble.id,
            nombre: item.inmueble.id,
            selected: item.favorito,
            precio: item.inmueble.id,
            url: item.inmueble.url
        }));
        setFavoritosDB(favoritos);
        localStorage.setItem('favoritosDB',JSON.stringify(favoritos));
        localStorage.setItem('favoritos',JSON.stringify(favoritos));
    }

    const loginUser = async (data: any) => {
        try {
            const response = await apiService.post('/api/login/', {
                username: data.username,
                password: data.password
            });
            if (response) {
                setUser(response.user);
                setToken(response.access);
                setRefresh(response.refresh)
                setIsAuthenticated(true)
                localStorage.setItem("user", JSON.stringify(response.user))
                localStorage.setItem("token", response.access);
                localStorage.setItem("refresh", response.refresh);
                AlertExito({message:'Iniciaste sesion correctamente'})
                getFavoritos(response.user.id,response.access);
                if (response.user?.intereses?.length > 0) {
                    navigate("/principal");
                } else {
                    navigate("/intereses");
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

    const registerUser = async (data: any) => {
        try {
            const response = await apiService.post('/api/register/', {
                email: data.email,
                nombre: data.name,
                apellido: data.lastName,
                edad: data.age,
                username: data.username,
                password: data.password
            });
            if (response) {
                setUser(response.user);
                setToken(response.access);
                setRefresh(response.refresh)
                setIsAuthenticated(true)
                localStorage.setItem("user", JSON.stringify(response.user))
                localStorage.setItem("token", response.access);
                localStorage.setItem("refresh", response.refresh);
                AlertExito({message:'Registro Exitoso'});
                navigate("/intereses");
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
        localStorage.removeItem("user");
        localStorage.removeItem("refresh");
        localStorage.removeItem('favorites');
        localStorage.removeItem('inmueblePorUsuario');
        localStorage.removeItem('favoritos');
        localStorage.removeItem('favoritosNuevos');
        localStorage.removeItem('favoritosDB');
        navigate("/inicio-sesion");
    };
    return (
        <AuthContext.Provider value={{favoritosDB,inmueblePorUsuario,setInmueblePorUsuario,isAuthenticated, token, refresh, user, loginUser, registerUser, logoutUser, refreshToken }}>
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