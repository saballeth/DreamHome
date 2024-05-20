import { useAuth } from '@/Context/AuthContext';
import AboutUs from '@/components/AboutUs/AboutUs';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import PrincipalHeader from '@/components/Principal/Principal_Header/PrincipalHeader';

const About: React.FC = () => {
    const auth = useAuth();

    return (
        <>
            <div className="content">
                {auth.isAuthenticated ? (
                    <PrincipalHeader />
                ) : (
                    <Header logged={false} />
                )}
                <AboutUs />
                <Footer styleC={true} />
            </div>

        </>
    )
}
export default About