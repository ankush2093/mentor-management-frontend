import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import AddStudent from "./components/Admin/StudentDetails.js/AddStudent";
import StudentList from "./components/Admin/StudentDetails.js/StudentList";
import UpdateStudent from "./components/Admin/StudentDetails.js/UpdateStudent";
import ViewStudent from "./components/Admin/StudentDetails.js/ViewStudent";
import Footer from "./components/Footer/Footer";
import Header from "./components/HomePage/Header";
import Home from "./components/HomePage/Home";
import MentorLogin from "./components/Mentor/MentorLogin/MentorLogin";
import ParentLogin from "./components/Parent/ParentLogin/ParentLogin";
import StudentHomePage from "./components/Student/StudentHomePage";
import ParentHomePage from "./components/Parent/ParentHomePage";
import MentorHomePage from "./components/Mentor/MentorHomePage";
import StudentProfile from "./components/Parent/ParentLogin/StudentProfile";
import CustomFilter from "./components/Mentor/MentorLogin/CustomFilter";
import StudentListTabel from "./components/Mentor/MentorLogin/StudentListTabel";
import Form from "./components/Mentor/MentorLogin/Form"
import Navbarr from "./components/Mentor/MentorLogin/Navbarr";

import MentorLeave from "./components/Mentor/MentorLogin/MentorLeave";

import EditProfile from "./components/Student/StudentLogin/EditProfile";
import StudentLeave from "./components/Student/StudentLogin/StudentLeave";
import StudentLogin from "./components/Student/StudentLogin/StudentLogin";
import StudentMarks from "./components/Parent/ParentLogin/StudentMarks";
import StudentAttendance from "./components/Parent/ParentLogin/StudentAttendance";
import ShowMarks from "./components/Parent/ParentLogin/ShowMarks";
import ShowAttendance from "./components/Parent/ParentLogin/ShowAttendance";
import StudentChat from "./components/Student/StudentLogin/StudentChat";
import Chatwithmentor from "./components/Parent/ParentLogin/Chatwithmentor";
import ViewAssingment from "./components/Student/StudentLogin/ViewAssingment";
import EditStudent from "./components/Student/EditStudent";
import Mentorform from "./components/Student/StudentLogin/Mentorform";







function App() {
  return (
    <div>
      <Header />

      {/* <AdminLogin /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<Footer />}></Route>
          <Route path='/student' element={<StudentLogin />}></Route>
          <Route path='/studentHomePage' element={<StudentHomePage />}></Route>
          <Route path='/admin' element={<AdminLogin />}></Route>
          <Route path='/mentor' element={<MentorLogin />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/mentorHomePage' element={<MentorHomePage />}></Route>
          
          <Route path='/navbarr' element={<Navbarr/>}></Route>
          <Route path='/customFilter' element={<CustomFilter/>}></Route>
          <Route path='/studentListTabel' element={<StudentListTabel />}></Route>
          <Route path='/mentorLeave' element={<MentorLeave />}></Route>
        
          <Route path='/parentHomePage' element={<ParentHomePage />}></Route>
          <Route path='/parent' element={<ParentLogin />}></Route>

          {/*Admin module routing*/}
          <Route path='/studentList' element={<StudentList />}></Route>
          <Route path='/add-student' element={<AddStudent />}></Route>
          <Route path='/update-student/:id' element={<UpdateStudent />}></Route>
          <Route path='/view-student/:id' element={<ViewStudent />}></Route>

          {/* Student Levae Form Routing */}
          <Route path='/StudentLeave' element={<StudentLeave />}></Route>
          <Route path='/EditProfile/:id' element={<EditProfile />}></Route>
          {/* <Route path='/Chat' element={<Caht />}></Route> */}

          <Route path='/StudentProfile' element={<StudentProfile />}></Route>
          <Route path='/StudentMarks' element={<StudentMarks />}></Route>
          <Route path='/StudentAttendance' element={<StudentAttendance />}></Route>
          <Route path='/ShowAttendance' element={<ShowAttendance />}></Route>
          <Route path='/ShowMarks' element={<ShowMarks />}></Route>
          <Route path="/StudentChat" element={<StudentChat/>}></Route>
          <Route path='/Chatwithmentor' element={<Chatwithmentor/>}></Route>
          <Route path="/editstudent" element={<EditStudent/>}></Route>
          <Route path="/Mentorform" element={<Mentorform/>}></Route>
          <Route path='/ViewAssingment' element={<ViewAssingment/>}></Route>
           

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
