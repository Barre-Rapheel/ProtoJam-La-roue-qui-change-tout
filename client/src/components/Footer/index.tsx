import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} La Roue Qui Change Tout. Tous droits
        réservés.
      </p>
    </footer>
  );
}

export default Footer;
