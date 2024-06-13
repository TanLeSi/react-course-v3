import { useState, useEffect } from "react";

const ToggleChallenge = () => {
  const [isToggled, setIsToggled] = useState(0);
  const value = "Hello World!";
  const handleClick = () => { setIsToggled(!isToggled) }
  return (
    <>
      <button className="btn" type="button" onClick={handleClick}>Toggle</button>
      {isToggled && <p>{value}</p>}
    </>
  )
  return <h2>toggle challenge</h2>;
};

export default ToggleChallenge;
