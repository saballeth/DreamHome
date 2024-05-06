import CardList from "@/components/Principal/CardList/CardList"
import Principal_Header from "@/components/Principal/Principal_Header/Principal.Header"
import Filtrado from "@/components/Principal/Filtrado/Filtrado"
import Footer from "@/components/Footer/Footer"


const HomePrincipal: React.FC = () =>{
  
    return (
        <>
            <Principal_Header/>
            <Filtrado/>
            <CardList/>
            <Footer/>
        </>
    )
}
export default HomePrincipal