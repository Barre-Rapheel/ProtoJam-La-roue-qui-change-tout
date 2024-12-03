function Button() {
    const handleClick = () => {
      console.log("bravo !");
    };
  
    return <button type="button" onClick={handleClick}>Click</button>;
  }
  
  export default Button;
