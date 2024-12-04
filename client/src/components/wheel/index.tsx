import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Button from "../Button/Button";

const MySpinWheel = ({
  onSpinComplete,
}: {
  onSpinComplete: (randomId: number) => void;
}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const audio = new Audio("./src/assets/sound/roue fortune 2(1).mp3");

  const playSound = () => {
    audio.volume = 0.2;
    audio.play();
  };

  const data = [
    { option: "🌱🌱🌱", style: { backgroundColor: "#FFC4C6" } },
    { option: "⭐️⭐️⭐️", style: { backgroundColor: "#FF5300" } },
    { option: "🧁🧁🧁", style: { backgroundColor: "#FDDB00" } },
    { option: "❤️❤️❤️", style: { backgroundColor: "#D0F8C4" } },
    { option: "🍭🍭🍭", style: { backgroundColor: "#C9ABF8" } },
    { option: "☀️☀️☀️", style: { backgroundColor: "#A5E3F4" } },
  ];

  const handleSpinClick = () => {
    playSound();
    const newPrizeNumber = Math.ceil(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  const handleSpinStop = () => {
    setMustSpin(false);
    onSpinComplete(prizeNumber);
  };
  return (
    <>
      <div className="wheel">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={handleSpinStop}
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
