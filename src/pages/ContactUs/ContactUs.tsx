import Header from "@/components/Header/Header";
import "./ContactUs.styles.css";

export function ContactUs() {
  return (
    <div className="ContactUs">
      <Header colorNameLogo={true} />

      <div className="ContactUs-container">
        <div className="ContactUs-container__text">
          <div className="ContactUs-container__text-text">
            <h1>Contac Us</h1>
            <p>If you need help or any other questions, feel free to ask</p>
          </div>

          <div className="ContactUs-container__text-inputs">
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Phone number" />
            <textarea placeholder="Write your message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
        <div className="ContactUs-container__image">
          {/* <img src={img} alt="DreamHome" /> */}
        </div>
      </div>
    </div>
  );
}
