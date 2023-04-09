import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AdminLogin.css";

class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <center>
            <h1 className="title">Welcome to Admin Module</h1>
          </center>
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <h1 className="text-center">Login</h1>
                <form>
                  <div className="form-group">
                    <label> Username :</label>
                    <input
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
                    />
                  </div>
                  <div className="text-center">
                    <Link to="/studentList">
                      <button className="btn btn-info mt-3  buttonSize">
                        Login
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
