import {useNavigate } from 'react-router-dom';
import './Footer.css';

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
        <a className="item" href="/aboutus">About Us</a>
        <a className="item" href="/service">Service</a>
        <a className="item" href="/">Information</a>
      </div>
      <div className="footer__container-button">
        <h3 className='footer__text'>Let's do it! -</h3>
        <button onClick={handleContact} className="button__footer">Contact Us</button>
      </div>
    </footer>
  );
};

export default Footer;