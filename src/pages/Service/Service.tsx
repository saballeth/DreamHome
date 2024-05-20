import ServicesPage from "@/components/Service/Service"
import Header from '@/components/Header/Header';
import Footer from "@/components/Footer/Footer";
import { useAuth } from "@/Context/AuthContext";
import PrincipalHeader from "@/components/Principal/Principal_Header/PrincipalHeader";

const Service: React.FC = () => {
    const auth = useAuth();

    return (
        <>
            {auth.isAuthenticated ? (
                <PrincipalHeader colorNameLogo={true} colorUbi={true}/>
        ) : (
                <Header colorNameLogo={true} colorNameNav={true} />
            )}
            <ServicesPage />
            <Footer styleC={true} />
        </>
    )
}
export default Service;