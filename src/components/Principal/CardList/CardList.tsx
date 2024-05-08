import "./CardList_index.css";
import Card from "../Card/Card";
import ApiService from "@/apiCalls.service/apiCalls.service";
import { useEffect, useState } from "react";

function CardList() {
  const token = localStorage.getItem('token') || '';  
  const apiService = new ApiService(token)

  interface Inmueble{
    id:number;
    nombre: string;
    precio: number;
  }

  const [listData, setListData] = useState<Inmueble[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get('/api/inmuebles/');
        const inmueblesData: Inmueble[] = response.map((item: any) => ({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio
        }));
        setListData(inmueblesData);
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };
    console.log(listData.at(0)?.id)
    
    fetchData();
  }, []);


  return (
    <div className="card-list wrapper">
      {listData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
}

export default CardList;