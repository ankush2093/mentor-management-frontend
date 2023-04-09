import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import "../css/StudentHome.css";

export default function StudentHomePage(props) {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  const username = localStorage.getItem("username");
  console.log(username);
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   const result = await axios.get("http://localhost:8080/users");
  //   setUsers(result.data);
  // };

  return (
    <>

      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "cursive",
          fontWeight: "900",
          fontSize: "60PX",
        }}
      >
        Welcome To Student Module{" "}
      </h1>
      <h3
        className=""
        style={{
          justifyContent: "center",
          textAlign: "center",
          color: "#232b2b",
        }}
      >
        {" "}
        Mr. {username}
      </h3>

      <br />
      <br />
      <br />
      <br />
      <div className="flex">
        <div className="card">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/online-registration-system/approval-form-for-faculty-leave-others.png"
            className="card-img"
            alt=""
          />
          <h3>Leave Module</h3>
          <Link to="/StudentLeave">
            <button className="button">Open</button>
          </Link>

        </div>
        <div className="card">
          <img
            src="https://e7.pngegg.com/pngimages/34/887/png-clipart-online-chat-computer-icons-livechat-conversation-others-logo-online-chat.png"
            className="card-img"
            alt=""
          />
          <h3>Chat With Mentor</h3>
         
          <Link to="/StudentChat">
            <button className="button">Open</button>
          </Link>
        </div>

        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU"
            className="card-img"
            alt=""
          />
          <h3>Profile</h3>
         
          <Link
            className="button"
            to={`/EditProfile/${users.id}`}
          >
            View
          </Link>
        </div>

        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrUNgMVAFPXrCrtMsN0wqU1JGq9w5WF8z7Q&usqp=CAU"
            className="card-img"
            alt=""
          />
          <h3>Assignment</h3>
         
          <Link to="/ViewAssingment">
            <button className="button">Open</button>
          </Link>
        </div>

        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEG_FvbCGk8ZGCqtqlHg2BdX0rZgFwzXzY5dNUO4&s"
            className="card-img"
            alt=""
          />
          <h3>Attendence</h3>
         
          <Link to="/StudentAttendance">
            <button className="button">Open</button>
          </Link>
        </div>


        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFAdlAagyl09aF1N9xukeoWkq65HmQEb1uA--HvqUwJKzovM8s5I-X5Q9bN8OJ1JB_tWMp37nteA&usqp=CAU&ec=48665699"
            className="card-img"
            alt=""
          />
          <h3>Mentoring Form</h3>
         
          <Link to="/Mentorform">
            <button className="button">Open</button>
          </Link>
        </div>
      </div>
    </>
  );
}
