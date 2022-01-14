import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { useHistory } from "react-router-dom";
function UpdateData(props) {
  let [name, setName] = useState(props.name);
  let [email, setEmail] = useState(props.email);
  let [password, setPassword] = useState(props.password);
  function updateData() {
    let data = { name, email, password };
    fetch(`http://localhost:8000/comments/${props.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
      
    })
    alert("updated")
  }
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Update Data</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={updateData}>Update</button>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>
  );
}

export default UpdateData;
