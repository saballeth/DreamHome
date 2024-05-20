import "./CardList_index.css";
import Card from "../Card/Card";
import ApiService from "@/apiCalls.service/apiCalls.service";
import { useEffect, useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import Spinner from "@/components/Spinner/Spinner";
import { useSelect } from "@/Context/Context";

const CardList: React.FC = () => {
  const auth = useAuth();
  const apiService = new ApiService(auth.token);
  const { selectUbi } = useSelect();
  const { pageSize } = useSelect();

  interface Inmueble {
    id: number;
    nombre: string;
    precio: number;
    ciudad: any
  }

  const [filteredData, setFilteredData] = useState<Inmueble[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
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
        setFilteredData(inmueblesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    if (selectUbi) {
      const hasCards = filteredData.some((card) => 
        card.ciudad.nombre === selectUbi?.value
      )
      setCardCity(hasCards);
      setFilteredData(filteredData.filter((card) => card.ciudad.nombre === selectUbi?.value));
    } else {
      setFilteredData(filteredData);
    }
  }, [selectUbi,  filteredData]);

  if (!filteredData.length) {
    return (
      <div className="spinner__container__cardList">
        <Spinner/> 
      </div>
    )
  }


  const handleRefreshCards = async () => {
    try {
      const response = await apiService.get("/api/inmuebles/");
      const inmueblesData: Inmueble[] = response.map((item: any) => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio
      }));
      setFilteredData(inmueblesData);
      setFilteredData(inmueblesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const renderPageControls = () => {
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const pageButtons = [];

  
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button key={i} onClick={() => handlePageChange(i)}>{i}</button>
      );
    }
  
    return pageButtons;
  };
   const startIndex = (currentPage - 1) * pageSize;
   const endIndex = startIndex + pageSize;
   const pageData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="card-list wrapper">
       {pageData.map((card) => (
  <Card key={card.id} data={card} favorite={false} />
))}
      {selectUbi !== null && filteredData.map((card) => (
        selectUbi.value === card.ciudad.nombre && <Card key={card.id} data={card} favorite={false}/>
      ))}
      {!isCardCity && (
        <div className="card__not-found">
          <p>No hay Inmuebles con la ciudad Seleccionada</p>
        </div>
      )}
       <div className="pagination">
        {Array.from({ length: Math.ceil(filteredData.length / pageSize) }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
        ))}
      </div>
    </div>
  );
}

export default CardList;