import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./style.scss";

export default function Row(props) {
  var users = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();
  const { id, email, first_name, last_name } = props.item;
  console.log("dd");
  const deleteUser = async () => {
    const req = await axios.post(`https://reqres.in/api/users/${id}`);
    alert(`${first_name} ${last_name} has been deleted`);
  };
  return (
    <div className="row">
      <p className="email">{id}</p>
      <p className="email">{email}</p>
      <p className="email">{first_name}</p>
      <p className="email">{last_name}</p>
      <p className="email">
        {first_name} {last_name}
      </p>
      {users && (
        <div className="actions">
          <button
            onClick={() => {
              navigate(`/edit/${id}`);
            }}
          >
            Edit
          </button>
          <span>&nbsp;</span>
          <button className="delete" onClick={deleteUser}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
