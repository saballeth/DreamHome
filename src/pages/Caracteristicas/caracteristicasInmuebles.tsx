import Header from "@/components/Principal/Principal_Header/PrincipalHeader"
import Caracteristicas from '@/components/Caracteristicas/Caracteristicas'
import Footer from '@/components/Footer/Footer'
import Provider from "@/Context/Context"

const caracteristicas: React.FC = () =>{
  
    return (
        <>
            <Provider>
                <Header colorNameLogo={true} colorUbi={true}/>
                <Caracteristicas/>
                <Footer/>
            </Provider>
        </>
    )
}
export default caracteristicas