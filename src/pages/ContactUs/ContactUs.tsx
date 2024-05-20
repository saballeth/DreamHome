import { useAuth } from '@/Context/AuthContext';
import Contact from '@/components/ContactUs/ContactUs';
import { } from '@/components/ContactUs/ContactUs.styles.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import PrincipalHeader from '@/components/Principal/Principal_Header/PrincipalHeader';

const ContactUs: React.FC = () => {
  const auth = useAuth();

  return (
    <>
      {auth.isAuthenticated ? (
        <PrincipalHeader />
      ) : (
        <Header colorNameLogo={true} />
      )}
      <Contact />
      <Footer styleC={true} />
    </>
  )
}
export default ContactUs