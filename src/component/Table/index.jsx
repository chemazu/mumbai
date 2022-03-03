import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import "./style.scss";
import Row from "../Row";

export default function Table() {
  const context = useContext(UserContext);
  const user = context.users.data.data;
  return (
    <div className="table">
      <div className="top">
        <p>ID</p>
        <p>Email</p>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Full Name</p>
        <p>Action</p>
      </div>
      <div className="bottom">
        {user.map((item) => (
          <Row item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
}
