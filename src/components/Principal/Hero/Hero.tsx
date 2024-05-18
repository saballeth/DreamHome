import "./HeroStyles.css"
import { CiSearch } from "react-icons/ci";
import Autocomplete from '@mui/joy/Autocomplete';
import { useSelect } from "@/Context/Context";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

interface Inmueble {
  id: number;
  nombre: string;
}

function Hero() {
  const { inmuebles } = useSelect() as { inmuebles: Inmueble[] };
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<Inmueble[]>([]);
  const [selectedOption, setSelectedOption] = useState<Inmueble | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inmuebles && inmuebles.length > 0) {
      setOptions(inmuebles);
      setLoading(false);
    } else {
      setOptions([]);
      setLoading(true);
    }
  }, [inmuebles]);

  const handleButtonClick = () => {
    if (selectedOption) {
      navigate(`/caracteristica/${selectedOption.id}`)
    } else {
      Swal.fire({
        icon: 'error',
        title: '<h2>No se encontro una opcion</h2>',
        timer: 5000,
      })
    }
  };

  return (
    <div className="hero__container">
      <div className="hero__form">
        {/*<input placeholder="Estoy buscando..." type="text" className="hero__form-text" />*/}
        <Autocomplete
          freeSolo
          className="hero__form-text"
          placeholder="Estoy buscando..."
          sx={{
            "--Input-radius": "0px",
            "--Input-minHeight": "0px"
          }}
          options={options}
          getOptionLabel={(option:any) => option.nombre}
          onChange={(_event, value:any) => setSelectedOption(value)}
          renderOption={(props, option, { selected }) => (
            <li {...props} key={option.id} style={{ backgroundColor: selected ? '#ccc' : 'transparent',padding:'5px 10px' }}>
              {option.nombre}
            </li>
          )}
        />
        <button onClick={handleButtonClick} className="hero__form-button">
          <CiSearch className="button__logo" />
        </button>
      </div>
    </div>
  );
}

export default Hero;