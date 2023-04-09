//import { Footer } from "mdbreact";
import React, { Component } from "react";
//import { Navbar, Container } from "react-bootstrap";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./StudentLogin/StudentHome.css";
import "./MentorLogin/MentorHomePage.css";
import { Link } from "react-router-dom";

export default class MentorHomePage extends Component {
  render() {
    return (
      <>
        <center>
          <hr />
          <h1>Welcome To Mentor Module Dashboard</h1>
          <hr />
        </center>
        <br />
        <br />
        <br />
        <br />
        <div className='flex'>
        <div className='card'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU'
              className='card-img'
              alt=''
            />
            <h3>Student Details</h3>
            <p />
            <Link to='/StudentListTabel'>
              <button className='btn btn-info mt-3  buttonSize'>Open</button>
            </Link>
          </div>
          <div className='card'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrUNgMVAFPXrCrtMsN0wqU1JGq9w5WF8z7Q&usqp=CAU'
              className='card-img'
              alt=''
            />
            <h3>Student Issue</h3>
            <p />
            <Link to='/Form'>
              <button className='btn btn-info mt-3  buttonSize'>Open</button>
            </Link>
          </div>
         
          <div className='card'>
            <img
              src='https://icons.veryicon.com/png/o/miscellaneous/online-registration-system/approval-form-for-faculty-leave-others.png'
              className='card-img'
              alt=''
            />
            <h3>Leave Approved</h3>
            <p />
            <Link to='/MentorLeave'>
              <button className='btn btn-info mt-3  buttonSize'>Open</button>
            </Link>
          </div>
          <div className='card'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEG_FvbCGk8ZGCqtqlHg2BdX0rZgFwzXzY5dNUO4&s'
              className='card-img'
              alt=''
            />
            <h3>Contact With Admin</h3>
            <p />
            <Link to='/Attendence'>
              <button className='btn btn-info mt-3  buttonSize'>Open</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}