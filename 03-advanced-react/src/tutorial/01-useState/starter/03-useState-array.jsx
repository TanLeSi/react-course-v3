import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const handleRemove = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople)
  }
  const handleRemoveAll = () => {
    setPeople([])
  }
  return (
    <div>
      {
        people.map((person) => {
          return (
            <div>
              <h4 key={person.id} > {person.name}</h4>
              <button type="button" className="btn" onClick={() => handleRemove(person.id)}>remove</button>
            </div>
          )
        })
      }
      <div>
        <button type="button" className="btn" onClick={handleRemoveAll}>Remove All</button>
      </div>
      <h2>useState array example</h2>
    </div >
  );
};

export default UseStateArray;
