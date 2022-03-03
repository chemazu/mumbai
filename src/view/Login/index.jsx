import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/input-hook";
import axios from "axios";
import pablo from "../../resource/pablo.svg";
import "./style.scss";

export default function Login() {
  const navigate = useNavigate();
  const [users, setUsers] = useState("");

  const fetchUsers = async () => {
    try {
      const request = await axios.get(
        `https://reqres.in/api/users?page=1&per_page=12`
      );
      setUsers(request);
      localStorage.setItem("request", JSON.stringify(request));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (a, b) => {
    try {
      const req = await axios.post(a, b);
      const token = req.data.token;
      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      console.log(error);
    }
    navigate("/user");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = users.data.data;
    const result = info.filter((item) => {
      if (item.email == email) {
        return true;
      }
      return false;
    });
    if (result.length == 0) {
      navigate("/user");
    } else {
      handleLogin("https://reqres.in/api/login", {
        email: email,
        password: password,
      });
    }
    resetEmail()
    resetPassword()
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    change: changePassword,
    reset: resetPassword,
  } = useInput("");
  return (
    <div className="login">
      <div className="left">
        <img src={pablo} alt="pablo" />
      </div>
      <div className="right">
        <div className="right-content">
          <div className="div">
            <h1>Welcome !</h1>
            <p>Enter details to login.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="auth-form-item">
              <input
                placeholder="Enter your e-mail"
                type="email"
                {...changeEmail}
              />
            </div>
            <div className="auth-form-item-pass">
              <input
                placeholder="Enter your password"
                type="password"
                {...changePassword}
              />
            </div>
            <button>LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}
