import React, { useState } from "react";
// import "./AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const naviagte = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:9090/admin/login?username=${username}&password=${password}`
      );
      const data = response.data;
      localStorage.setItem("username", data.username);
      localStorage.setItem("user", data.userId);
      console.log(data);
      // {userId: null, username: null, password: null}
      if (data.userId == null) 
      {
        alert("Check Your UserId and Password. ");
      } 
      else 
      {
        naviagte("/StudentHomePage");
        naviagte(0);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <br></br><br></br>
        <center>
          <h1 className="text-success" >Welcome to Student Module</h1>
          
        </center>
      <div className="container mt">
      
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <h1 className="text-center" style={{ fontFamily: "cursive" }}>
                Login
              </h1>
              <form>
                <div className="form-group">
                  <label> Username :</label>
                  <input
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    placeholder="Username"
                    name="uername"
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="form-group mt-3">
                  <label> Password :</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="text-center">
                  <button
                    onClick={handleLogin}
                    className="btn btn-info mt-3  buttonSize"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
