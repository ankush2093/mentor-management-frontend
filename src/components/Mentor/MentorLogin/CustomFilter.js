import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import StudentListTabel from "./StudentListTabel";
import StudentListTabel from "./StudentListTabel";

export default function CustomFilter() {
  const [count, setCount] = useState(true);
  function changefunction() {
    setCount(!count);
  }
  return (
    <div>
      {" "}
      <div className="container bg-dark text-white mt-4 p-3">
        <h1 className="h1">Filter</h1>
        <div className="row">
          <div className="col-sm-3">
            <label className="form-label">Session</label>

            <Form.Select aria-label="Session">
              <option>Select Year</option>
              <optgroup label="2018" />
              <option value="2018-2022">2018-2022</option>
              <optgroup label="2019" />
              <option value="2019-2023">2019-2023</option>
              <optgroup label="2020" />
              <option value="2020-2024">2020-2024</option>
              <optgroup label="2021" />
              <option value="2021-2025">2021-2025</option>
              <optgroup label="2022" />
              <option value="2022-2026">2022-2026</option>
            </Form.Select>
          </div>
          <div className="col-sm-3">
            <label className="form-label">Branch</label>

            <Form.Select aria-label="Branch">
              <option>Select Branch</option>
              <option value="B.Tech">B.tech</option>
              <option value="M.Tech">M.tech</option>
              <option value="Diploma">Diploma</option>
              <option value="B.com">B.com</option>
            </Form.Select>
          </div>
          <div className="col-sm-3">
            <label className="form-label">Stream</label>

            <Form.Select aria-label="Stream">
              <option value="2018-2022">Select Stream</option>
              <option value="CSE">CSE</option>
              <option value="CIVIL">CIVIL</option>
              <option value="MECHANICAL">Mechanical</option>
              <option value="ELECTRICAL">Electrical</option>
            </Form.Select>
          </div>
          <div className="col-sm-3">
            <label className="form-label">Semester</label>
            <Form.Select aria-label="Semester">
              <option>Select Semester</option>
              <optgroup label="1st Year "/>
                <option value="1st Sem">1st Sem</option>
                <option value="2nd Sem">2nd Sem</option>
              <optgroup label="2nd Year "/>
                <option value="3rd Sem">3rd Sem</option>
                <option value="4th Sem">4th Sem</option>
              <optgroup label="3rd Year "/>
                <option value="5th Sem">5th Sem</option>
                <option value="6th Sem">6th Sem</option>
              <optgroup label="4th Year "/>
                <option value="7th Sem">7th Sem</option>
                <option value="8th Sem">8th Sem</option>
            </Form.Select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <button className="btn btn-primary " onClick={changefunction}>
              Search
            </button>
          </div>
        </div>
      </div>
      {count === false ? <StudentListTabel /> : <span></span>}
    </div>
  );
}
