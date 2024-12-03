import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1>La Roue Qui Change Tout</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/about">À propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
