import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./view/Login";
import User from "./view/User";
import Edit from "./view/Edit";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "./context/UserContext";

function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState(4);
  const [isPending, setIsPending] = useState(true);

  const FetchUsers = async () => {
    try {
      const request = await axios.get(
        `https://reqres.in/api/users?page=${page}&per_page=4`
      );
      setUsers(request);
      setIsPending(false);
      console.log(request);

      localStorage.setItem("users", JSON.stringify(request));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchUsers();
    localStorage.setItem("users", JSON.stringify(users));
    console.log();
  }, [page]);
  return (
    <div className="App">
      <UserContext.Provider value={{ page, users, setPage }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/user"
            element={
              <User pending={{ isPending, setIsPending, page, setPage }} />
            }
          />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
