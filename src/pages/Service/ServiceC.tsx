import ServicesPage from "@/components/Service/Service"
import HeaderPrincipal from '@/components/Principal/Principal_Header/PrincipalHeader'
import Footer from "@/components/Footer/Footer";

const ServiceC: React.FC = () =>{
  
    return (
        <>
            <HeaderPrincipal colorNameLogo={true} colorUbi={true}/>
            <ServicesPage/>
            <Footer/>
        </>
    )
}
export default ServiceC;