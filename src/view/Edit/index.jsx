import React, { useState } from "react";
import { useInput } from "../../hooks/input-hook";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./style.scss";

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");
  const {
    value: firstName,
    change: changeFirstName,
    reset: resetFirstName,
  } = useInput("");
  const {
    value: LastName,
    change: changeLastName,
    reset: resetLastName,
  } = useInput("");
  const handEdit = async (b) => {
    try {
      const req = await axios.put(`https://reqres.in/api/users/${id}`, b);
      const token = req.data.token;
      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="edit">
      <div className="soft">
        <h2>Edit</h2>
        <form onSubmit={handleSubmit}>
          <div className="auth-form-item">
            <input placeholder="Enter e-mail" type="email" {...changeEmail} />
          </div>
          <div className="auth-form-item">
            <input
              placeholder="Enter First Name"
              type="text"
              {...changeFirstName}
            />
          </div>
          <div className="auth-form-item">
            <input
              placeholder="Enter Last Name"
              type="text"
              {...changeLastName}
            />
          </div>

          {/* <p className="forgot">Forgot Password</p> */}
          <button
            onClick={() => {
              navigate("/edit/create");
            }}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
