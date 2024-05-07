import "./Principal.Header.styles.css"

function Navigation() {
  return (
    <div className="Principal-container">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">DreamHome</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Estoy buscando..</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;