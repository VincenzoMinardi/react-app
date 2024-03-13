import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetails from "./UserDetails";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then(response => {
      setUsers(response.data.users);
    });
  }, []);

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>User Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} onClick={() => handleUserClick(user)}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
};

export default UserTable;
