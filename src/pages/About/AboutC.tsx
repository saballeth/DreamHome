import AboutUs from '@/components/AboutUs/AboutUs';
import HeaderPrincipal from '@/components/Principal/Principal_Header/PrincipalHeader'

const AboutC: React.FC = () =>{
  
    return (
        <>
                <div className="content">
                    <HeaderPrincipal/>
                    <AboutUs/>
                </div>    

        </>
    )
}
export default AboutC