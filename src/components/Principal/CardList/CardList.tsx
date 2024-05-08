import "./CardList_index.css";
import Card from "../Card/Card";

type PropertyType = {
  id: number;
  imageSrc: string;
  place: string;
  cost: string;
};

type onSelectPropertyType = (property: PropertyType) => void;

function CardList({ onSelectProperty }: { onSelectProperty: onSelectPropertyType }) {
  const cardData: PropertyType[] = [    {
      id: 1,
      imageSrc: 'https://multimedia.metrocuadrado.com/15293-M4346305/15293-M4346305_1_p.jpg',
      place: 'Barranquilla',
      cost: '$1023120',
    },
    {
      id: 2,
      imageSrc: 'https://media.staticontent.com/media/pictures/9495889e-54f9-40d2-939d-b04bf30b47c7',
      place: 'Cartagena',
      cost: '$152310',
    },
    {
      id: 3,
      imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
      place: 'Santa Marta',
      cost: '$2005122',
    },
    {
      id: 4,
      imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
      place: 'Santa Marta',
      cost: '$22044770',
    },
    {
      id: 5,
      imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
      place: 'Santa Marta',
      cost: '$220999',
    },
    {
      id: 6,
      imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
      place: 'Bucaramanga',
      cost: '$2202231',
    },
    {
      id: 7,
      imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
      place: 'Barranquilla',
      cost: '$202090',
    },
    {
      id: 8,
      imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
      place: 'Bogota',
      cost: '$600000',
    },
    {
      id: 9,
      imageSrc: 'https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg',
      place: 'Santa Marta',
      cost: '$300244463',
    },
  ];

  const handleSelectProperty = (property: PropertyType) => {
    onSelectProperty(property);
  };

  return (
    <div className="card-list wrapper">
      {cardData.map((card) => (
        <Card key={card.id} data={card}/>
      ))}
    </div>
  );
}

export default CardList;