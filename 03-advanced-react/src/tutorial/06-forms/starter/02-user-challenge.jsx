import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const addUser = (e) => {
    e.preventDefault();
    if (!name) return;
    const newUser = { id: Date.now(), name: name };
    setUsers([...users, newUser]);
    setName("");
  }
  const removeUser = (name) => {
    setUsers(
      users.filter((user) => user.name !== name)
    )
  };
  return (
    <div>
      <form className='form' onSubmit={addUser} >
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input'
            id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      {
        users.map((user) => {
          return (
            <div key={user.id}>
              <h4>{user.name}</h4>
              <button type="button" className="btn" onClick={() => removeUser(user.name)}>Remove</button>
            </div>
          )
        })
      }
    </div >
  );
};
export default UserChallenge;
