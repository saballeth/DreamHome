import "./Principal.Header.styles.css"
import logo from "@/assets/vecteezy_real-estate-agent-holding-house-key-to-his-client-after_8572449 1.png";

function Navigation() {
  return (
    <div className="Principal.container">
  <img src={logo} alt="DreamHome" className="logo" />
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-item">
        <a href="#" className="nav-link">DreamHome</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Estoy buscando..</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Mejor elección</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Residencias Recomendadas.</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Tu ubicación</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Hola</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Mi Cuenta</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Filtros</a>
      </li>
    </ul>
  </nav>
</div>
  );
}

export default Navigation;