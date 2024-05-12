import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';
import AboutUs from '@/components/AboutUs/AboutUs';

const Footer = () => {
  const navigate = useNavigate();

  const handleContact = async () => {
    navigate("/create-account");
  };

  return (
    <footer className="footer__container">
      <div className='footer__container-logo'>
        <img src="/src/assets/logogid.png" alt="" />
        <a href="/principal">DreamHome</a>
      </div>
      <div className="footer__container-items">
        <a className="item" href="/aboutusC">Sobre Nosotros</a>
        <a className="item" href="/serviceC">Servicios</a>
      </div>
      <div className="footer__container-button">
        <h3 className='footer__text'>Let's do it! -</h3>
        <button onClick={handleContact} className="button__footer">Contactanos</button>
      </div>
    </footer>
  );
};

export default Footer;