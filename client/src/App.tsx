import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Card";
import MySpinWheel from "./components/wheel";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="wheel-container">
          <MySpinWheel />
        </div>
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
      </main>
      <Footer />
    </>
  );
}

export default App;
