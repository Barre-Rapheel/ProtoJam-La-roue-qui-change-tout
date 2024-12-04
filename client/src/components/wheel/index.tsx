import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Button from "../Button/Button";
import "../wheel/App.css";

const MySpinWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "🌱🌱🌱", style: { backgroundColor: "#FFC4C6" } },
    { option: "⭐️⭐️⭐️", style: { backgroundColor: "#FF5300" } },
    { option: "🧁🧁🧁", style: { backgroundColor: "#FDDB00" } },
    { option: "❤️❤️❤️", style: { backgroundColor: "#D0F8C4" } },
    { option: "🍭🍭🍭", style: { backgroundColor: "#C9ABF8" } },
    { option: "☀️☀️☀️", style: { backgroundColor: "#A5E3F4" } },
  ];

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  return (
    <>
      <div className="wheelContainer">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => setMustSpin(false)}
          outerBorderColor="#260A37"
          outerBorderWidth={2}
          innerBorderColor="#260A37"
        />
      </div>
      <Button onButtonClick={handleSpinClick} />
    </>
  );
};

export default MySpinWheel;
