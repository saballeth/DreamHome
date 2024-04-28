import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  // Método para realizar una solicitud GET
  async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url);
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            this.handleError(error as AxiosError); // Solo pasa AxiosError a handleError
          }
          throw new Error('Error executing GET request');
    }
  }

  // Método para realizar una solicitud POST
  async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            this.handleError(error as AxiosError); // Solo pasa AxiosError a handleError
          }
          throw new Error('Error executing POST request');
    }
  }

  // Método para manejar errores de Axios
  private handleError(error: AxiosError) {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error('Request failed with response:', error.response.data);
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió una respuesta
      console.error('No response received:', error.request);
    } else {
      // Hubo un error antes de enviar la solicitud
      console.error('Request failed:', error.message);
    }
  }
}

export default ApiService;