import React, { Component } from "react";
import StudentService from "../StudentServices/StudentService";
// import "../../App.css";

class ViewStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      student: {},
    };
  }

  //did mount method
  componentDidMount() {
    StudentService.getStudentById(this.state.id).then((response) => {
      this.setState({ student: response.data });
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <br></br>
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">View Student Details</h3>
            <div className="card-body">
              <div className="row">
                <label className="font-weight-bold"> First Name : </label>
                <div>{this.state.student.firstName}</div>
              </div>
              <div className="row">
                <label> Last Name : </label>
                <div>{this.state.student.lastName}</div>
              </div>
              <div classNam="row">
                <label>Registration Number : </label>
                <div>{this.state.student.registrationNumber}</div>
              </div>
              <div className="row">
                <label>Email Id : </label>
                <div>{this.state.student.emailId}</div>
              </div>
              <div classNam="row">
                <label>Password : </label>
                <div>{this.state.student.password}</div>
              </div>
              <div classNam="row">
                <label>Date Of Birth : </label>
                <div>{this.state.student.dateOfBirth}</div>
              </div>
              <div classNam="row">
                <label>Branch : </label>
                <div>{this.state.student.branch}</div>
              </div>
              <div classNam="row">
                <label>Semester : </label>
                <div>{this.state.student.semester}</div>
              </div>
              <div classNam="row">
                <label>Contact : </label>
                <div>{this.state.student.contact}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewStudent;
