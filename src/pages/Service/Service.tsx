import ServicesPage from "@/components/Service/Service"
import Header from '@/components/Header/Header';
const Service: React.FC = () =>{
  
    return (
        <>
            <Header logged={false}/>
            <ServicesPage/>
        </>
    )
}
export default Service;