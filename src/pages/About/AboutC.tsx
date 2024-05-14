import AboutUs from '@/components/AboutUs/AboutUs';
import Footer from '@/components/Footer/Footer';
import HeaderPrincipal from '@/components/Principal/Principal_Header/PrincipalHeader'

const AboutC: React.FC = () =>{
  
    return (
        <>
                <div className="content">
                    <HeaderPrincipal/>
                    <AboutUs/>
                    <Footer/>
                </div>    

        </>
    )
}
export default AboutC