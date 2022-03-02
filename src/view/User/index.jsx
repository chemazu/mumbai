import React from "react";
import "./style.scss";
import Table from "../../component/Table";
import { useNavigate } from "react-router-dom";

export default function User(props) {
  const { isPending, page, setPage } = props.pending;
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  const next = () => {
    if (page >= 3) {
      setPage(3);
    } else {
      setPage(page + 1);
    }
  };
  const prev = () => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };
  var users = JSON.parse(localStorage.getItem("token"));
  console.log(users);

  return (
    <div className="user">
      <div className="high">Users</div>
      <div className="low"> {!isPending && <Table />}</div>
      <div>
        {users && (
          <div>
            <button onClick={()=>{navigate("/create");}}>Create</button>
            <span>&nbsp;</span>
            <button onClick={logOut}>Log Out</button>
          </div>
        )}
      </div>
      <div className="pag">
        <div onClick={prev}>Prev</div>
        <div>{page}</div>
        <div onClick={next}>Next</div>
      </div>
    </div>
  );
}
