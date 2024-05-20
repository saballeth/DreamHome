/* eslint-disable @typescript-eslint/no-explicit-any */
import CardList from "@/components/Principal/CardList/CardList";
import PrincipalHeader from "@/components/Principal/Principal_Header/PrincipalHeader";
import Hero from "@/components/Principal/Hero/Hero";
import Filtrado from "@/components/Principal/Filtrado/Filtrado";
import Footer from "@/components/Footer/Footer";
import Provider from "@/Context/Context";
import React from "react";
import ApiService from "@/apiCalls.service/apiCalls.service";
import { useAuth } from "@/Context/AuthContext";

interface Inmueble {
  id: number;
  nombre: string;
  precio: number;
}

const HomePrincipal: React.FC = () => {
  const [listData, setListData] = React.useState<Inmueble[]>([]);
  const [filterData, setFilterData] = React.useState<Inmueble[]>([]);
  const [actualPage, setActualPage] = React.useState({
    start: 0,
    end: 1,
  });

  const auth = useAuth();
  const apiService = new ApiService(auth.token);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get("/api/inmuebles/");
        const inmueblesData: Inmueble[] = response.map((item: any) => ({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
        }));
        
        setListData(inmueblesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const start = actualPage.start * 10;
    const end = actualPage.end * 10;
    const filterData = listData?.slice(start, end)
    setFilterData(filterData) 
  }, [actualPage])


  const initialData = listData?.slice(0, 10)

  return (
    <>
      <Provider>
        <PrincipalHeader />
        <Hero />
        <Filtrado 
            allPages={Math.ceil(listData?.length / 10)} 
            actualPage={actualPage} 
            setActualPage={setActualPage}
        />
        <CardList 
            data={
                filterData?.length > 0 
                ?  filterData 
                : initialData} 
            />
        <Footer />
      </Provider>
    </>
  );
};
export default HomePrincipal;
