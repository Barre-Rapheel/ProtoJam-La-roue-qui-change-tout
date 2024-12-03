import { Wheel } from 'react-custom-roulette';
import { useState } from 'react';

const MySpinWheel = () => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  const data = [
    { option: 'Option 1' },
    { option: 'Option 2' },
    { option: 'Option 3' },
    { option: 'Option 4'},
    { option: 'Option 5' },
    { option: 'Option 6'},
  ]

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }
  return (
    <>
    <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={data}
      onStopSpinning={() => setMustSpin(false)}
    />
    <button onClick={handleSpinClick}/>
    </>
  )
}

export default MySpinWheel