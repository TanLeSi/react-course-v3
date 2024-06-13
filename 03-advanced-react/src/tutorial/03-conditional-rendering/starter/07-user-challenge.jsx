import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const handleClick = () => {
    !user ? setUser({ name: "John Doe" }) : setUser(null)
  };
  return (
    <>
      <h2>user challenge</h2>
      <button className="btn" type="button" onClick={handleClick}>{user ? "Logout" : "Login"}</button>
      {user &&
        <div>
          <h4>hello there, {user.name}</h4>
        </div>
      }
    </>
  )
};

export default UserChallenge;
