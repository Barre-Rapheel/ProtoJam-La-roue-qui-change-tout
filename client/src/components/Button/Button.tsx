function Button({ onButtonClick }: { onButtonClick: () => void }) {
  const handleClick = () => {
    onButtonClick(); // Appelle la fonction passée depuis le parent
  };

  return (
    <button type="button" onClick={handleClick}>
      Click
    </button>
  );
}

export default Button;
