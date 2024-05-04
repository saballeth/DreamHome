import Carousel from 'react-bootstrap/Carousel';
import Casa from '@/data/Casa.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselC() {
  return (
    <Carousel>
      {Casa.fotos.map((getPhoto, index) =>(
        <Carousel.Item key={index}>
          <div className="house-photos-content">
              <img src={getPhoto} alt="photo-casa" />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselC