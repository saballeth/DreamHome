import ServicesPage from "@/components/Service/Service"
import Header from '@/components/Header/Header';
import Footer from "@/components/Footer/Footer";
const Service: React.FC = () =>{
  
    return (
        <>
            <Header colorNameLogo={true} colorNameNav={true}/>
            <ServicesPage/>
            <Footer/>
        </>
    )
}
export default Service;