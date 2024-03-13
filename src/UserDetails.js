import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div>
      <h1>User Details</h1>
      <div>
        <p>Name: {user.firstName}</p>
        <p>lastName: {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default UserDetails;
