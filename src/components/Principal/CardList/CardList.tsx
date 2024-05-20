import "./CardList_index.css";
import Card from "../Card/Card";
import Spinner from "@/components/Spinner/Spinner";
import { useState } from "react";

interface Inmueble {
  id: number;
  nombre: string;
  precio: number;
}

type Props = {
  data: Inmueble[]
}

const CardList = ({ data }: Props) => {

  const [isCardCity, setCardCity] = useState(true);

  if (!data.length) {
    return (
      <div className="spinner__container__cardList">
        <Spinner />
      </div>
    );
  }

  // const handleRefreshCards = async () => {
  //   try {
  //     const response = await apiService.get("/api/inmuebles/");
  //     const inmueblesData: Inmueble[] = response.map((item: any) => ({
  //       id: item.id,
  //       nombre: item.nombre,
  //       precio: item.precio,
  //     }));
  //     setFilteredData(inmueblesData);
  //     setFilteredData(inmueblesData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // const renderPageControls = () => {
  //   const totalPages = Math.ceil(filteredData.length / pageSize);
  //   const pageButtons = [];

  //   for (let i = 1; i <= totalPages; i++) {
  //     pageButtons.push(
  //       <button key={i} onClick={() => handlePageChange(i)}>
  //         {i}
  //       </button>
  //     );
  //   }

  //   return pageButtons;
  // };

  return (
    <div className="card-list wrapper">
      {data.map((card) => (
        <Card key={card.id} data={card} favorite={false} />
      ))}
      {/* {selectUbi !== null &&
        filteredData.map(
          (card) =>
            selectUbi.value === card.ciudad.nombre && (
              <Card key={card.id} data={card} favorite={false} />
            )
        )} */}
      {!isCardCity && (
        <div className="card__not-found">
          <p>No hay Inmuebles con la ciudad Seleccionada</p>
        </div>
      )}
      {/* <div className="pagination">
        {Array.from(
          { length: Math.ceil(data?.length / 10) },
          (_, i) => i + 1
        ).map((page) => (
          <button key={page}>
            {page}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default CardList;
