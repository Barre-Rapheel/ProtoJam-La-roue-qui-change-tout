interface ButtonProps {
  label: string;
}



function Button({ ButtonProps }: ButtonProps) {
  const handleClick = () => {};

  return (
    <button type="button" onClick={handleClick}>
      Click
    </button>
  );
}

export default Button;
