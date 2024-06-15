import AlertError from '@/components/Alert/AlertError';
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';



class ApiService {
  private axiosInstance: AxiosInstance;
  private baseUrlHost = "https://arqui-sistema-recomendacion-85b7038cdf33.herokuapp.com/"

  constructor(token?: string) {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrlHost,headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });
  }

  async postFavorito(idinmueble: number, idusuario: number, token: any) {
    const apiServiceToken = new ApiService(token);
    const data = { idinmueble, idusuario };
    try {
      const response: AxiosResponse = await apiServiceToken.post(`/api/inmueblesPorUsuario/`, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.handleError(error as AxiosError);
      }
      throw new Error('Error al agregar favorito');
    }
  }
  

  async get(url: string) {
    try {
      const response: AxiosResponse = await this.axiosInstance.get(url);
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            this.handleError(error as AxiosError);
          }
          throw new Error('Error al ejecutar la respuesta');
    }
  }
  async getFavoritos(id:number,token:any) {
    try{
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
    localStorage.setItem('favoritosDB',JSON.stringify(favoritos));
    localStorage.setItem('favoritos',JSON.stringify(favoritos));
    return favoritos;
  } catch (error) {
    if(axios.isAxiosError(error)){
      this.handleError(error as AxiosError);
    }
   throw new Error("erro al obtener favoritos"); 
  }
}

  async post(url: string, data: any) {
    try {
      const response: AxiosResponse = await this.axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            this.handleError(error as AxiosError); 
          }
          throw new Error('Error al ejecutar respuesta POST');
    }
  }

  async update(url: string, data: any) {
    try {
      const response: AxiosResponse = await this.axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
          this.handleError(error as AxiosError); 
        }
        throw new Error('Error al ejecutar respuesta PUT');
      }
  }

  async delete(url: string) {
    try {
      const response: AxiosResponse = await this.axiosInstance.delete(url);
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
          this.handleError(error as AxiosError); 
        }
        throw new Error('Error al ejecutar respuesta DETELE');
    }
  }

  private handleError(error: AxiosError) {
    if (error.response) {
      const objectError:any = error.response.data;
      if(objectError.error === "User not found"){
        AlertError({message:'Usuario no encontrado'});
      }else if(objectError.error === "Invalid credentials"){
        AlertError({message:'Contraseña incorrecta'});
      }else if (objectError && objectError.email && objectError.email[0] === "Ya existe usuario con este email.") {
        AlertError({message:'Ya existe un usuario con este correo'});
      }else if (objectError && objectError.username && objectError.username[0] === "Ya existe usuario con este username.") {
        AlertError({message:'Ya existe un usuario con este nombre de usuario'});
      }
    } else {
      console.error('Request failed:', error.message);
    }
  }
}

export default ApiService;