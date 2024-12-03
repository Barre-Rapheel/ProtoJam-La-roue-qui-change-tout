function Button({ onButtonClick }: { onButtonClick: () => void }) {
  const handleClick = () => {
    onButtonClick();
  };

  return (
    <button type="button" onClick={handleClick}>
      Click
    </button>
  );
}

export default Button;
