import './Footer.css';

const Footer = () => {
  return (
    <div className="Footercontainer">
      <nav>
        <ul>
        <div className="">
            <ul>
              <li><a href="#">GIDSYC</a></li>
            </ul>
          </div>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Information</a></li>
          <div className="button-container">
            <ul>
              <li><a href="#">Let's do it!</a></li>
              <li><a> — </a></li>
            </ul>
            <button className="call-to-action">Contact Us</button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;