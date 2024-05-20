import ServicesPage from "@/components/Service/Service"
import HeaderPrincipal from '@/components/Principal/Principal_Header/PrincipalHeader'

const ServiceC: React.FC = () =>{
  
    return (
        <>
            <HeaderPrincipal colorNameLogo={true} colorUbi={true}/>
            <ServicesPage/>
        </>
    )
}
export default ServiceC;