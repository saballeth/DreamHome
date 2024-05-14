import Contact from '@/components/ContactUs/ContactUs';
import {} from '@/components/ContactUs/ContactUs.styles.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const ContactUs: React.FC = () =>{
  
    return (
        <>
          <Header colorNameLogo={true} />
          <Contact/> 
          <Footer styleC={true}/>   
        </>
    )
}
export default ContactUs