import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
