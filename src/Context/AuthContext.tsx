import ApiService from '@/apiCalls.service/apiCalls.service';
import AlertExito from '@/components/Alert/AlertExito';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelect } from './Context';

interface AuthContextProps {
    isAuthenticated: boolean;
    token: string,
    refresh: string,
    user: any,
    loginUser: (data: any) => void;
    registerUser: (data: any) => void;
    logoutUser: () => void;
    refreshToken: () => void;
    inmueblePorUsuario: any;
    setInmueblePorUsuario: any;
    favoritosDB: any
    setFavoritosDB: any;
    getFavoritos: any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const tokenValue = localStorage.getItem("token");
    const [favoritosDB, setFavoritosDB] = useState(() => {
        const storedData = localStorage.getItem("favoritosDB");
        return storedData ? JSON.parse(storedData) : [];
    });
    const [isAuthenticated, setIsAuthenticated] = useState(tokenValue !== null);
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [refresh, setRefresh] = useState(localStorage.getItem("refresh") || "");
    const [inmueblePorUsuario, setInmueblePorUsuario] = useState<any[]>(() => {
        const storedData = localStorage.getItem("inmuebleporusuario");
        return storedData ? JSON.parse(storedData) : {};
    });
    const navigate = useNavigate();
    const apiService = new ApiService();
    const { setSelectedFavorites, selectedFavorites, itemsClics } = useSelect();
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

    /// ZONA DE CONSTRUCCIO

    const transformArray = (array: any[]): any[] => {
        return array.map(item => ({
            idInmueble: item.inmueble.id,
            nombre: item.inmueble.nombre,
            precio: item.inmueble.precio,
            selected: item.favorito,
            idInmueblePorUsuario: item.idInmueblePorUsuario
        }));
    };

    const getFavoritos = async (id: any) => {
        try {
            const response = await apiService.get(`/api/inmueblesPorUsuario/${id}/obtenerPorUsuario`);
            localStorage.setItem("favoritosDB", JSON.stringify(response))
            const favoritos = transformArray(response);
            setFavoritosDB(favoritos);
            setSelectedFavorites(favoritos);
        } catch (error) {
            console.error('Error al obtener favoritos:', error);
        }
    };

    useEffect(() => {
        if (user) {
            apiService.setToken(token);
            getFavoritos(user.id);
        }
    }, [user]);

    /// FIN ZONA DE CONSTRUCCION

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
                AlertExito({ message: 'Iniciaste sesion correctamente' })
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
                AlertExito({ message: 'Registro Exitoso' });
                navigate("/intereses");
            }
        } catch (err) {
            console.error(err);
        }
    };

    const guardardandoFavoritos = () => {
        apiService.setToken(token);
        try {
            if (Array.isArray(favoritosDB)) {
                const promise = selectedFavorites.map(async (item) => {
                    if (!favoritosDB.some((value: any) => value.idInmueble == item.idInmueble)) {
                        const response = await apiService.post('/api/inmueblesPorUsuario/', {
                            usuario: user.username,
                            inmueble: item.url,
                            favorito: item.selected ? 1 : 0,
                            calificacion: null,
                            clasificacion: null,
                            comentarios: null,
                            numeroDeClicks: null,
                        });
                        //   console.log(response);
                        if (response) {
                            console.log("Guardado exitoso POST");
                        }
                    } else {
                        const indiceInmueblePorUsuarioDB = favoritosDB.findIndex((item: any) => item.idInmueble == item.idInmueble);
                        const idInmueblePorUsuario = favoritosDB[indiceInmueblePorUsuarioDB].idInmueblePorUsuario;
                        const response = await apiService.patch(`/api/inmueblesPorUsuario/${idInmueblePorUsuario}`, {
                            favorite: item.selected ? 1 : 0,
                        });
                        //   console.log(response);
                        if (response) {
                            console.log("Guardado exitoso PATCH")
                        }
                    }
                });
                if (promise) {
                    console.log("Guardado completo exitoso");
                }
            } else {
                console.log("FavoritosDB no es un array");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const guardandoClics = () => {
        apiService.setToken(token);
        try {
            if (Array.isArray(favoritosDB)) {
                const promise = itemsClics.map(async (item) => {
                    if (!favoritosDB.some((value: any) => value.idInmueble == item.idInmueble)) {
                        const response = await apiService.post('/api/inmueblesPorUsuario/', {
                            usuario: user.username,
                            inmueble: item.url,
                            favorito: null,
                            calificacion: null,
                            clasificacion: null,
                            comentarios: null,
                            numeroDeClicks: item.clics,
                        });
                        if (response) {
                            console.log("Clics guardado exitoso POST");
                        }
                    } else {
                        const indiceInmueblePorUsuarioDB = favoritosDB.findIndex((item: any) => item.idInmueble == item.idInmueble);
                        const idInmueblePorUsuario = favoritosDB[indiceInmueblePorUsuarioDB].idInmueblePorUsuario;
                        const response = await apiService.patch(`/api/inmueblesPorUsuario/${idInmueblePorUsuario}`, {
                            numeroDeClicks: item.clics,
                        });
                        if (response) {
                            console.log("Clics guardado exitoso PATCH")
                        }
                    }
                });
                if (promise) {
                    console.log("Guardado completo exitoso");
                }
            } else {
                console.log("FavoritosDB no es un array");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const removerLocalStorage = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("refresh");
        localStorage.removeItem('favorites');
        localStorage.removeItem('inmuebleporusuario');
        localStorage.removeItem('favoritos');
        localStorage.removeItem('favoritosNuevos');
        localStorage.removeItem('favoritosDB');
        localStorage.removeItem('itemsCountClics');
    }

    const logoutUser = () => {
        guardardandoFavoritos();
        guardandoClics();
        setUser(null);
        setToken("");
        setRefresh("");
        setIsAuthenticated(false)
        removerLocalStorage();
        navigate("/inicio-sesion");
    };

    return (
        <AuthContext.Provider value={{ getFavoritos, setFavoritosDB, favoritosDB, inmueblePorUsuario, setInmueblePorUsuario, isAuthenticated, token, refresh, user, loginUser, registerUser, logoutUser, refreshToken }}>
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