import Header from "@/components/Principal/Principal_Header/PrincipalHeader"
import Caracteristicas from '@/components/Caracteristicas/Caracteristicas'
import Footer from '@/components/Footer/Footer'

const Login: React.FC = () =>{
  
    return (
        <>
            <Header colorNameLogo={true} colorUbi={true}/>
            <Caracteristicas data={undefined}/>
            <Footer/>
        </>
    )
}
export default Login