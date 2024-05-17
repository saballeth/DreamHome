import Autocomplete from "@mui/material/Autocomplete";
import "./HeroStyles.css"
import { CiSearch } from "react-icons/ci";
import TextField from "@mui/material/TextField";
import { useSelect } from "@/Context/Context";


function Hero() {
  const {inmuebles} = useSelect();

  return (
    <div className="hero__container">
      <div className="hero__form">
        {/*<input placeholder="Estoy buscando..." type="text" className="hero__form-text" />*/}
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          className="hero__form-text"
          options={inmuebles?.map((option: { title: any; }) => option.title)}
          renderInput={(params) => <TextField {...params} label="Estoy buscando..." />}
        />
        <button className="hero__form-button">
          <CiSearch className="button__logo" />
        </button>
      </div>
    </div>
  );
}

export default Hero;