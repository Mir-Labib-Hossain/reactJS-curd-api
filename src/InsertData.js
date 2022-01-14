import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useState } from "react";
function InsertData() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  function insertData() {
    let data = { name, email, password };
    fetch("http://localhost:8000/comments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((result) => {
      console.log(result);
    })  
}
  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Insert Data</h1>
        <input type="text" placeholder="username" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={insertData} >Insert</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </Router>
  );
}

export default InsertData;
