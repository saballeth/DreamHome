import Contact from '@/components/ContactUs/ContactUs';
import {} from '@/components/ContactUs/ContactUs.styles.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Principal/Principal_Header/PrincipalHeader';

const ContactUs: React.FC = () =>{
  
    return (
        <>
          <Header colorNameLogo={true} colorUbi={false}/>
          <Contact/>    
          <Footer/>
        </>
    )
}
export default ContactUs