import Header from "@/components/Principal/Principal_Header/PrincipalHeader";
import Footer from "@/components/Footer/Footer"; 
import Perfil from '@/components/Perfil/Perfil';

const PerfilPage: React.FC = () =>{
    return (
        <>
            <Header colorNameLogo={true} colorUbi={true}/>
            <Perfil/>
            <Footer styleC={true}/>
        </>
    )
}
export default PerfilPage;