import "./CardList_index.css";
import Card from "../Card/Card";
import ApiService from "@/apiCalls.service/apiCalls.service";
import { useEffect, useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import Spinner from "@/components/Spinner/Spinner";
import { useSelect } from "@/Context/Context";

function CardList() {
  const auth = useAuth();
  const apiService = new ApiService(auth.token)
  const { selectUbi } = useSelect();

  interface Inmueble{
    id:number;
    nombre: string;
    precio: number;
    ciudad: any
  }

  const [listData, setListData] = useState<Inmueble[]>([])
  const [isCardCity, setCardCity] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get('/api/inmuebles/');
        const inmueblesData: Inmueble[] = response.map((item: any) => ({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          ciudad: item.ciudad
        }));
        setListData(inmueblesData);
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };    
    fetchData();
  }, []);
  
  useEffect(() => {
    const hasCards = listData.some((card) => 
      card.ciudad.nombre === selectUbi?.value
    )
    setCardCity(hasCards);
  }, [selectUbi]);
  

  if (!listData.length) {
    return (
      <div className="spinner__container__cardList">
        <Spinner/> 
      </div>
    )
  }


  return (
    <div className="card-list wrapper">
      {selectUbi === null && listData.map((card) => (
        <Card key={card.id} data={card} favorite={false}/>
      ))}
      {selectUbi !== null && listData.map((card) => (
        selectUbi.value === card.ciudad.nombre && <Card key={card.id} data={card} favorite={false}/>
      ))}
      {!isCardCity && (
        <div className="card__not-found">
          <p>No hay Inmuebles con la ciudad Seleccionada</p>
        </div>
      )}
    </div>
  );
}

export default CardList;