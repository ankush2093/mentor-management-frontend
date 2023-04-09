import React, { Component } from "react";
import StudentService from "../StudentServices/StudentService";

class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      registrationNumber: "",
      emailId: "",
      password: "",
      dateOfBirth: "",
      branch: "",
      semester: "",
      contact: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeRegistrationNumberHandler =
      this.changeRegistrationNumberHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
    this.changeBranchHandler = this.changeBranchHandler.bind(this);
    this.changeSemesterHandler = this.changeSemesterHandler.bind(this);
    this.changeContactHandler = this.changeContactHandler.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
  }

  //save student method -----------------------------------------------
  saveStudent = (e) => {
    e.preventDefault();
    let student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      registrationNumber: this.state.registrationNumber,
      emailId: this.state.emailId,
      password: this.state.password,
      dateOfBirth: this.state.dateOfBirth,
      branch: this.state.branch,
      semester: this.state.semester,
      contact: this.state.contact,
    };
    console.log("student => " + JSON.stringify(student));

    StudentService.createStudent(student).then((response) => {
      this.props.history.push("/students");
    });
  };

  //Handler methods ----------------------------------------------------
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeRegistrationNumberHandler = (event) => {
    this.setState({ registrationNumber: event.target.value });
  };
  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  changeDateOfBirthHandler = (event) => {
    this.setState({ dateOfBirth: event.target.value });
  };
  changeBranchHandler = (event) => {
    this.setState({ branch: event.target.value });
  };
  changeSemesterHandler = (event) => {
    this.setState({ semester: event.target.value });
  };
  changeContactHandler = (event) => {
    this.setState({ contact: event.target.value });
  };

  //cancel method
  cancel() {
    this.props.history.push("/students");
  }

  //render method -------------------------------------------------------------------------
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Student</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Registration Number: </label>
                    <input
                      placeholder="Registration Number"
                      name="registrationNumber"
                      className="form-control"
                      value={this.state.registrationNumber}
                      onChange={this.changeRegistrationNumberHandler}
                      type="number"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Id: </label>
                    <input
                      placeholder="Email Id"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <input
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                      type="password"
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth: </label>
                    <input
                      placeholder="Date of Birth"
                      name="dateOfBirth"
                      className="form-control"
                      value={this.state.dateOfBirth}
                      onChange={this.changeDateOfBirthHandler}
                      type="date"
                    />
                  </div>
                  <div className="form-group">
                    <label>Branch: </label>
                    <input
                      placeholder="Branch"
                      name="branch"
                      className="form-control"
                      value={this.state.branch}
                      onChange={this.changeBranchHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Semester: </label>
                    <input
                      placeholder="Semester"
                      name="semester"
                      className="form-control"
                      value={this.state.semester}
                      onChange={this.changeSemesterHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact: </label>
                    <input
                      placeholder="Contact"
                      name="contact"
                      className="form-control"
                      value={this.state.contact}
                      onChange={this.changeContactHandler}
                      type="number"
                    />
                  </div>

                  <button
                    className="btn btn-success mt-4"
                    onClick={this.saveStudent}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger mt-4"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddStudent;
