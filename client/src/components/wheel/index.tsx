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

	const data = [
		{ option: "Option 1" },
		{ option: "Option 2" },
		{ option: "Option 3" },
		{ option: "Option 4" },
		{ option: "Option 5" },
		{ option: "Option 6" },
	];

	const handleSpinClick = () => {
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
			<Wheel
				mustStartSpinning={mustSpin}
				prizeNumber={prizeNumber}
				data={data}
				onStopSpinning={handleSpinStop}
			/>
			<Button onButtonClick={handleSpinClick} />
		</>
	);
};

export default MySpinWheel;
