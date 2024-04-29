import Header from "@/components/Header/Header";
import "./CreateAccount.styles.css";

const CreateAccount: React.FC = () =>  {
  return (
    <div className="CreateAccount">
      <Header />

      <div className="CreateAccount-container">
        <div className="CreateAccount-container__title">
          <h1>Bienvenido</h1>
          <p>
            Vamos a crear una <strong>Cuenta</strong>
          </p>
        </div>
        <form className="CreateAccount-container__form">
          <input
            type="email"
            placeholder="Email"
            className="CreateAccount-container__form-input"
          />

          <div className="CreateAccount-container__form-columns">
            <input
              type="text"
              placeholder="Name"
              className="CreateAccount-container__form-input"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="CreateAccount-container__form-input"
            />
          </div>

          <input
            type="number"
            placeholder="Age"
            className="CreateAccount-container__form-input"
          />
          <input
            type="text"
            placeholder="Username"
            className="CreateAccount-container__form-input"
          />

          <div className="CreateAccount-container__form-columns">
            <input
              type="password"
              placeholder="Password"
              className="CreateAccount-container__form-input"
            />
            <input
              type="password"
              placeholder="Repeat Password"
              className="CreateAccount-container__form-input"
            />
          </div>

          <button className="CreateAccount-container__form-buttom">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
export default CreateAccount