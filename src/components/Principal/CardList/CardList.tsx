import "./CardList_index.css";
import Card from "../Card/Card";
import ApiService from "@/apiCalls.service/apiCalls.service";
import { Key } from "react";

function CardList() {
  const apiService = new ApiService();
  
  // const cardData = [
  //   {
  //     id: 1,
  //     imageSrc: 'https://multimedia.metrocuadrado.com/15293-M4346305/15293-M4346305_1_p.jpg',
  //     place: 'Barranquilla',
  //     cost: '$100',
  //   },
  //   {
  //     id: 2,
  //     imageSrc: 'https://media.staticontent.com/media/pictures/9495889e-54f9-40d2-939d-b04bf30b47c7',
  //     place: 'Cartagena',
  //     cost: '$150',
  //   },
  //   {
  //     id: 3,
  //     imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
  //     place: 'Santa Marta',
  //     cost: '$200',
  //   },
  //   {
  //     id: 4,
  //     imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
  //     place: 'Santa Marta',
  //     cost: '$200',
  //   },
  //   {
  //     id: 5,
  //     imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
  //     place: 'Santa Marta',
  //     cost: '$200',
  //   },
  //   {
  //     id: 6,
  //     imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
  //     place: 'Bucaramanga',
  //     cost: '$200',
  //   },
  //   {
  //     id: 7,
  //     imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
  //     place: 'Tu prima',
  //     cost: '$20',
  //   },
  //   {
  //     id: 8,
  //     imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
  //     place: 'Tu hermana',
  //     cost: '$2',
  //   },
  //   {
  //     id: 9,
  //     imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
  //     place: 'Santa Marta',
  //     cost: '$200',
  //   },
  // ];

  const cardData = apiService.get('/api/inmuebles/');  
  
  return (
    <div className="card-list wrapper">
      {cardData.map((card: { id: Key | null | undefined; }) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
}

export default CardList;
