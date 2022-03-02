import React, { useState } from "react";
import { useInput } from "../../hooks/input-hook";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./style.scss";

export default function Edit(props) {
  const { act, title } = props;
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const { id } = useParams();
  const { value: name, change: changeName, reset: resetName } = useInput("");
  const { value: job, change: changeJob, reset: resetJob } = useInput("");

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const req = await axios.post(`https://reqres.in/api/users`, {
        name,
        job,
      });
      alert(`${req.data.name} has been created`);

      resetJob();
      resetName();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const req = await axios.put(`https://reqres.in/api/users/${id}`, {
        name,
        job,
      });
      alert(`${req.data.name} has been Updated`);
      resetJob();
      resetName();
    } catch (error) {
      console.log(error);
    }
  };
  // const handleCreate = (e) => {
  //   e.preventDefault();
  //   handleCreate();
  // };

  return (
    <div className="edit">
      <div className="soft">
        <h2>{title}</h2>
        <form >
          <div className="auth-form-item">
            <input
              placeholder="Enter Name"
              type="text"
              name="name"
              // onChange={handleChange}
              {...changeName}
            />
          </div>
          <div className="auth-form-item">
            <input
              placeholder="Enter Job"
              type="text"
              name="job"
              // onChange={handleChange}
              {...changeJob}
            />
          </div>

          {/* <p className="forgot">Forgot Password</p> */}
          {act?<button
            onClick={
            handleCreate}
          >
            Create
          </button>:
          <button
          onClick={
          handleUpdate}
        >
          Edit
        </button>}
          
        </form>
      </div>
    </div>
  );
}
