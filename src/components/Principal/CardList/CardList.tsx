import "./CardList_index.css";
import Card from "../Card/Card";
import ApiService from "@/apiCalls.service/apiCalls.service";
import { useState } from "react";

function CardList() {
  const token = localStorage.getItem('token') || '';  
  const apiService = new ApiService(token)
  
  const cardData = [
    {
      id: 1,
      nombre: 'Barranquilla',
      precio: 100,
    },
    {
      id: 2,
      nombre: 'Cartagena',
      precio: 150,
    },
    {
      id: 3,
      nombre: 'Santa Marta',
      precio: 200,
    },
    {
      id: 4,
      nombre: 'Santa Marta',
      precio: 200,
    },
    {
      id: 5,
      nombre: 'Santa Marta',
      precio: 200,
    },
    {
      id: 6,
      nombre: 'Bucaramanga',
      precio: 200,
    },
    {
      id: 7,
      nombre: 'Tu prima',
      precio: 20,
    },
    {
      id: 8,
      nombre: 'Tu hermana',
      precio: 2,
    },
    {
      id: 9,
      nombre: 'Santa Marta',
      precio: 200,
    },
  ];
  interface Inmueble{
    id:number;
    nombre: string;
    precio: number;
  }

  const [listData, setListData] = useState<Inmueble[]>([])

  const response = apiService.get('/api/inmuebles/')
  console.log(response)
  return (
    <div className="card-list wrapper">
      {cardData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
}

export default CardList;
