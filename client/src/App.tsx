import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import MySpinWheel from "./components/wheel";
import { goodActionsFetch } from "./services/Actions";
import { quotesZenFetch } from "./services/QuotesFetch";

function App() {
  const [action, setAction] = useState<string>("");
  const [quote, setQuote] = useState<string>("");

  const handleSpinComplete = async (randomId: number) => {
    try {
      const data = await goodActionsFetch(randomId);
      setAction(data?.action || "Aucune citation disponible");
      fetchQuote();
    } catch (error) {
      console.error("Erreur lors de la récupération de l'action", error);
      setAction("Erreur lors de la récupération de l'action");
    }
  };

  const fetchQuote = async () => {
    try {
      const data = await quotesZenFetch();
      console.info(data);
      if (data && data.length > 0) {
        setQuote(data[0]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la citation", error);
      setQuote("Erreur lors de la récupération de la citation");
    }
  };

  return (
    <>
      <Header />
      <MySpinWheel onSpinComplete={handleSpinComplete} />
      <div className="card-container">
        <Card title="Action du jour :" content={action} />
        <Card title="Citation du jour :" content={quote} />
      </div>
      <Footer />
    </>
  );
}

export default App;
