import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentService from "../StudentServices/StudentService";

class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };

    this.addStudent = this.addStudent.bind(this);
    this.editStudent = this.editStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  //componentDidMount function
  componentDidMount() {
    StudentService.getStudents().then((response) => {
      this.setState({ students: response.data });
    });
  }

  // Add student
  addStudent() {
    this.props.history.push("/add-student");
  }

  //edit student method
  editStudent(id) {
    this.props.history.push(`/update-student/${id}`);
  }

  //delete student
  deleteStudent(id) {
    StudentService.deleteStudent(id).then((response) => {
      this.setState({
        students: this.state.students.filter((student) => student.id !== id),
      });
    });
  }

  //view student
  viewStudent(id) {
    this.props.history.push(`/view-student/${id}`);
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Students List</h2>
        <Link to="/add-student">
          <button className="btn btn-primary " onClick={this.addStudent}>
            Add Student
          </button>
        </Link>
        <div className="row mt-4">
          <table className="table table-stiped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Registration No</th>
                <th>Email id</th>
                {/* <th>Password</th>
              <th>Date Of Birth</th>
              <th>Branch</th>
              <th>Semester</th>
              <th>Contact</th> */}
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.registrationNumber}</td>
                  <td>{student.emailId}</td>
                  {/* <td>{student.password}</td>
                            <td>{student.dateOfBirth}</td>
                            <td>{student.branch}</td>
                            <td>{student.semester}</td>
                            <td>{student.contact}</td> */}
                  <td>
                    <button
                      onClick={() => this.editStudent(student.id)}
                      className="btn btn-info btn-sm btnUpdate"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteStudent(student.id)}
                      className="btn btn-danger btn-sm btnDelete"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewStudent(student.id)}
                      className="btn btn-primary btn-sm btnView"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StudentList;
