import React, { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(url);
        const fetchedUsers = await response.json();
        setUsers(fetchedUsers);
      } catch (error) {
        console.log(error)
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {
          users.map((user) => {
            return (
              <li key={user.id}>
                <img src={user.avatar_url} alt={user.login} />
                <div>
                  <h5>{user.login}</h5>
                  <a href={user.url}>profile</a>
                </div>
              </li>
            );
          })
        }
      </ul>
    </>
  )
};

export default FetchData;
