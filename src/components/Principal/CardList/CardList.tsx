import "./CardList_index.css";
import Card from "../Card/Card";
import ApiService from "@/apiCalls.service/apiCalls.service";
import { useEffect, useState } from "react";
import { useAuth } from "@/AuthContext/AuthContext";

const CardList: React.FC = () => {
  const auth = useAuth();
  const apiService = new ApiService(auth.token);

  interface Inmueble {
    id: number;
    nombre: string;
    precio: number;
  }

  const [listData, setListData] = useState<Inmueble[]>([]);
  const [pageSize, setPageSize] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1); 

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
    fetchData();
  }, []);

  const handleRefreshCards = async () => {
    try {
      const response = await apiService.get("/api/inmuebles/");
      const inmueblesData: Inmueble[] = response.map((item: any) => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio
      }));
      setListData(inmueblesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  

  return (
    <div className="card-list wrapper">
      {listData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
}

export default CardList;