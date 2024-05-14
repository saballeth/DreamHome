import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useAuth } from '@/Context/AuthContext';
import ApiService from '@/apiCalls.service/apiCalls.service';
import { useEffect, useState } from 'react';


export default function FilterSelect({option,save}:{option:string,save:any}) {
    const auth = useAuth();
    const apiService = new ApiService(auth.token);
    
    interface Caracteristica{
        id:number;
        nombre: string;
        tipo_de_caracteristica: any;
    };

    const [listData, setListData] = useState<Caracteristica[]>([])
  
    function formatText(text:string){
        const words = text.split("-").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        return words.join(' ');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiService.get('/api/caracteristicas/');
                const data: Caracteristica[] = response.map((item: any) => ({
                    id: item.id,
                    nombre: item.nombre,
                    tipo_de_caracteristica: item.tipoDeCaracteristica.nombre,
                }));
                setListData(data);
            } catch (error) {
                console.error('Error fetching data:', error); 
            }
        };    
        fetchData();
    }, []);

    const interiores:Caracteristica[] = listData.filter(item => item.tipo_de_caracteristica === "caracteristicas-del-interior");
    const exteriores:Caracteristica[] = listData.filter(item => item.tipo_de_caracteristica === "caracteristicas-del-exterior" || item.tipo_de_caracteristica === "caracteristicas-del-exteriores");
    const sectores:Caracteristica[] = listData.filter(item => item.tipo_de_caracteristica === "caracteristicas-del-sector");
    const zonas_comunes:Caracteristica[] = listData.filter(item => item.tipo_de_caracteristica === "caracteristicas-del-zonas-comunes");

    const obtenerOpciones = (option:any) => {
        switch (option) {
          case "interior":
            return interiores
          case "exterior":
            return exteriores
          case "sector":
            return sectores
          case "zona_comun":
            return zonas_comunes
          default:
            return [];
        }
    };

    const handleOptions = (_:any,opciones:any[]) => {
      save(opciones);
    }

    return (
        <Stack spacing={3} sx={{ width: 300 }}>
        <Autocomplete
            multiple
            id="tags-outlined"
            options={obtenerOpciones(option)}
            getOptionLabel={(option) => formatText(option.nombre)}
            filterSelectedOptions
            onChange={handleOptions}
            renderInput={(params) => (
            <TextField
                {...params}
                placeholder="Caracteristicas"
            />
            )}
        />
        </Stack>
    );
}