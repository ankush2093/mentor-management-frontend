//import { Footer } from "mdbreact";
import React, { Component } from "react";
//import { Navbar, Container } from "react-bootstrap";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./ParentLogin/ParentHome.css";
import { Link } from "react-router-dom";

export default class ParentHomePage extends Component {
    render() {
        return (
            <>
                <center>
                    <hr />
                    <h1>Welcome To Parent Module Dashboard</h1>
                    <hr />
                </center>
                <br />
                <br />
                <br />
                <br />
                <div className='flex'>
                    <div className='card'>
                        <img
                            src='data:image/png;base64,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'
                            className='card-img'
                            alt=''
                        />
                        <h3>View Marks</h3>
                        <p />
                        {/* <button onclick='' className='btn'>
              Open
            </button> */}

                        <Link to='/StudentMarks'>
                            <button className='btn btn-info mt-3  buttonSize'>Open</button>
                        </Link>
                    </div>
                    <div className='card'>
                        <img
                            src='https://e7.pngegg.com/pngimages/34/887/png-clipart-online-chat-computer-icons-livechat-conversation-others-logo-online-chat.png'
                            className='card-img'
                            alt=''
                        />
                        <h3>Chat With Mentor</h3>
                        <p />
                        <Link to='/Chatwithmentor'>
                            <button className='btn btn-info mt-3  buttonSize'>Open</button>
                        </Link>
                    </div>

                    <div className='card'>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU'
                            className='card-img'
                            alt=''
                        />
                        <h3>Student Profile</h3>
                        <p />
                        <Link to='/StudentProfile'>
                            <button className='btn btn-info mt-3  buttonSize'>Open</button>
                        </Link>
                    </div>


                    {/* <div className='card'>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrUNgMVAFPXrCrtMsN0wqU1JGq9w5WF8z7Q&usqp=CAU'
                            className='card-img'
                            alt=''
                        />
                        <h3>Assignment</h3>
                        <p />
                        <Link to='/Assignment'>
                            <button className='btn btn-info mt-3  buttonSize'>Open</button>
                        </Link>
                    </div> */}


                    <div className='card'>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEG_FvbCGk8ZGCqtqlHg2BdX0rZgFwzXzY5dNUO4&s'
                            className='card-img'
                            alt=''
                        />
                        <h3>Attendence</h3>
                        <p />
                        <Link to='/StudentAttendance'>
                            <button className='btn btn-info mt-3  buttonSize'>Open</button>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

// // import React, { Component } from "react";
// // import { Navbar, Container } from "react-bootstrap";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
