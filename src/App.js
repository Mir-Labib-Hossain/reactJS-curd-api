// json-server --watch db.json --port 8000
import logo from "./logo.svg";
import "./App.css";
import InsertData from "./InsertData";
import UpdateData from "./UpdateData";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  let [userList, setUserList] = useState([]);
  let [id, setId] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  useEffect(() => getData(), []);
  function getData() {
    fetch("http://localhost:8000/comments").then((result) => {
      result.json().then((resp) => {
        setUserList(resp);
      });
    });
  }
  function deleteData(id){
    fetch(`http://localhost:8000/comments/${id}`,
      {method: "DELETE"})
    getData();
    alert("deleted")
  }
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <Link className="App-link" to="/">
            View Data
          </Link>
          <Link className="App-link" to="/insert">
            Inser Data
          </Link>
        </div>
        <Switch>
          <Route path="/insert">
            <InsertData />
          </Route>
          <Route path="/update">
            <UpdateData id={id} name={name} email={email} password={password}/>
          </Route>
          <Route path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>User Data</h1>
              <table>
                <tbody>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Operation</th>
                  </tr>
                  {userList.map((item) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>
                        <Link className="App-link" to="/update">
                          <button onClick={() => { setId(item.id); setName(item.name); setEmail(item.email);setPassword(item.password)}}>Update</button>
                        </Link>
                        <button onClick={()=>deleteData(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
            </header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
