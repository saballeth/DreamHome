import Interesespage from "@/components/Intereses/Intereses"
import Header from "@/components/Principal/Principal_Header/PrincipalHeader";
import Footer from "@/components/Footer/Footer"; 

const Intereses: React.FC = () =>{
    return (
        <>
            <Header/>
            <Interesespage/>
            <Footer styleC={true}/>
        </>
    )
}
export default Intereses;