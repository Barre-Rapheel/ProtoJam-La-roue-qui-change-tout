import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} - The Wheel of Change !</p>
      <p>- Made with ❤️ by Wilders -</p>
    </footer>
  );
}

export default Footer;
