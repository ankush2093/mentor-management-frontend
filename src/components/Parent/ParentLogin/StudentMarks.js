import "./Marks.css";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import React from "react";
import { Link } from "react-router-dom";

function StudentMarks() {
    return (
        <div className='container'>
            <center>

                <h1>View Student Attendance</h1>
            </center>
            <div className="form">
                <div className="col-12">

                    <select className="select form-control-lg">
                        <option value="1">Select Year</option>
                        <option value="2">2020-2021</option>
                        <option value="3">2021-2022 </option>
                        <option value="4">2022-2023</option>
                        <option value="4">2023-2024</option>
                    </select>
                    <select className="select form-control-lg m-4">
                        <option value="1">Select Branch </option>
                        <option value="2">Cse</option>
                        <option value="3">Mech </option>
                        <option value="4">Civil </option>
                        <option value="4">Ece </option>

                    </select>
                    <select className="select form-control-lg m-4">
                        <option value="1">Select Sem </option>
                        <option value="2">1st</option>
                        <option value="3">2nd</option>
                        <option value="4">3rd</option>
                        <option value="4">4th</option>
                        <option value="2">5th</option>
                        <option value="3">6th</option>
                        <option value="4">7th</option>
                        <option value="4">8th</option>
                    </select>
                </div>
            </div>
            <div className="form1">
                <Link to="/ShowMarks">
                    <button type="button" class="btn btn-primary ">Submit</button>
                </Link>
            </div>
        </div>
    );
}

export default StudentMarks;