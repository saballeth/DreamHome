import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import './Carousel.css'
import { CCarouselCaption ,CCarouselItem , CCarousel  , CImage,} from '@coreui/react'

function CarouselItems() {
    return (
        <CCarousel controls indicators> 
            <CCarouselItem> 
                <CImage className="d-block w-100 height" src='/src/assets/HousesTest/casa1.jpg' alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block">
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 height" src='/src/assets/HousesTest/casa2.jpg' alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block">
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 height" src='/src/assets/HousesTest/casa3.jpg'     alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block">
                    {/* <h5>Third slide label</h5> */}
                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    );
}

export default CarouselItems;