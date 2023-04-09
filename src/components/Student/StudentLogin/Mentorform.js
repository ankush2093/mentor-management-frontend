import React from 'react';



const Mentorform = () => {
  return (
    <div className="container" style={{ padding: "20px" }}>
    <h1 style={{ position: "center", color: "blue" }}>Students Leave Form</h1>
    <form >
    

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="registration"
          placeholder="reg.no"
          
        />
        <label for="floatingInput">Regd.No </label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="name"
          placeholder="full name"
          
        />
        <label for="floatingInput">Full Name of Student </label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="parentsNumber"
          placeholder="first name"

        />
        <label for="floatingInput">Parent's Mobile Number </label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="numberStudent"
          placeholder="first name"
          
        />
        <label for="floatingInput"> Student's Contact Number </label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="tenth_marks"
          placeholder="x"
          
        />
        <label for="floatingInput"> 10 th % </label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="twelveth_marks"
          placeholder="x"
          
        />
        <label for="floatingInput"> 12 th % or Diploma</label>
      </div>


      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="result_x_sem"
          placeholder="x"
          
        />
        <label for="floatingInput"> Result Status x sem (SGPA)</label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="backlog_subject"
          placeholder="x"
          
        />
        <label for="floatingInput"> Name of the Backlog Subject (If Any) in x semester</label>
      </div>


      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="total_backlog_subject"
          placeholder="x"
          
        />
        <label for="floatingInput"> Total Backlog Subject till x Semester</label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="dues_paid"
          placeholder="x"
          
        />
        <label for="floatingInput"> Dues Paid</label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="dues_remaining"
          placeholder="x"
          
        />
        <label for="floatingInput"> Dues Remaining</label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="registration_status"
          placeholder="x"
          
        />
        <label for="floatingInput">Registration Status in ERP</label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="attendence_percentage"
          placeholder="x"
          
        />
        <label for="floatingInput">Attendence %</label>
      </div>

      <h6>Status of Internal-1 exam (Appreared all subjects or not).If not Mention reason</h6>
      <div class="form-floating mb-3">
        
        <input
          class="form-control"
          name="status_of_internal_1"
          placeholder="x"
          
        />
       
        <label for="floatingInput">Status of Internal-1 exam (Appreared all subjects or not).If not Mention reason</label>
      </div>


      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="status_of_class_work"
          placeholder="x"
          
        />
        <label for="floatingInput">Status of Class Work Process</label>
      </div>


      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="online_event"
          placeholder="x"
          
        />
        <label for="floatingInput">Online Course/Online Event Registerd  </label>
      </div>
        

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="academic_issue"
          placeholder="x"
          
        />
        <label for="floatingInput">Academic Issues </label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          name="action_taken"
          placeholder="x"
          
        />
        <label for="floatingInput">Action Taken</label>
      </div>


      

      <button type="submit" className="submitbtn">
        Submit
      </button>
    </form>

   
  </div>
  )
}

export default Mentorform;