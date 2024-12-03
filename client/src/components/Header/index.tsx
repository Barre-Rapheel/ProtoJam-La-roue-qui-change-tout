import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1>La Roue Qui Change Tout</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">À propos</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
