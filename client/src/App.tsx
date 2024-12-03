import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <h2>Bienvenue sur La Roue Qui Change Tout !</h2>
      </main>
      <div className="card-container">
        <Card
          title="Bonne action du jour :"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora architecto rerum eveniet nisi!"
        />
        <Card
          title="Citation du jour :"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora architecto rerum eveniet nisi!"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
