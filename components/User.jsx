import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>
        <small>
          <i> Email: {user.email}</i>
        </small>
      </h3>
    </div>
  );
};

export default User;
