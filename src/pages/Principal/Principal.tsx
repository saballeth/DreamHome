import CardList from "@/components/Principal/CardList/CardList"
import PrincipalHeader from "@/components/Principal/Principal_Header/PrincipalHeader"
import Hero from "@/components/Principal/Hero/Hero"
import Filtrado from "@/components/Principal/Filtrado/Filtrado"
import Footer from "@/components/Footer/Footer"


const HomePrincipal: React.FC = () =>{
  
    return (
        <>
            <PrincipalHeader/>
            <Hero/>
            <Filtrado/>
            <CardList/>
            <Footer/>
        </>
    )
}
export default HomePrincipal