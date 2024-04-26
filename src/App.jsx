import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = React.useState();
  // Define a CSS class
const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {data ? (
        data.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      <button
        onClick={getUser}
        style={buttonStyle}
      >
        Get Users
      </button>
    </div>
  );
};

export default App;
