import React from 'react'
import "./Marks.css";
import { Link } from "react-router-dom";
function StudentAttendance() {
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
                        <option value="2">CSE</option>
                        <option value="3">MECH </option>
                        <option value="4">CIVIL </option>
                        <option value="4">ECE</option>

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
                <Link to="/ShowAttendance">
                    <button type="button" class="btn btn-primary ">Submit</button>
                </Link>
            </div>
        </div>
    )
}

export default StudentAttendance
