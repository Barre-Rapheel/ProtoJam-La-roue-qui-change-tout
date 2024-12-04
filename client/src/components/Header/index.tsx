import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>
        <Link className="link" to="/">
          The Wheel of Change !{" "}
        </Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
