import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} - La Roue Qui Change Tout !</p>
      <p>- Made with ❤️ by Wilders -</p>
    </footer>
  );
}

export default Footer;
