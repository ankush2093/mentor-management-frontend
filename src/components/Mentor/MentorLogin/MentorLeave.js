///import React from "react";
// import "components"
import "./Student.css";
import React from "react";

function MentorLeave() {
  return (
    
      <div className='container'>
        <center>
          
            <h1>Students Leave Form Check Approved/Reject</h1>
          
        </center>
        <hr />
        <form action='#'>
          <div className='form first'>
            <div className='details personal'>
              <span className='title'>Personal Details</span>
              <div className='fields'>
                <div className='input-field'>
                  <label>Full Name</label>
                  <input
                    type='text'
                    placeholder='Enter your name'
                    required=''
                  />
                </div>
                <div className='input-field'>
                  <label>Hostel Name</label>
                  <input
                    type='text'
                    placeholder='Enter hostel name'
                    required=''
                  />
                </div>
                <div className='input-field'>
                  <label>Email</label>
                  <input
                    type='text'
                    placeholder='Enter your email'
                    required=''
                  />
                </div>
                <div className='input-field'>
                  <label>Mobile Number</label>
                  <input
                    type='number'
                    placeholder='Enter mobile number'
                    required=''
                  />
                </div>
                <div className='input-field'>
                  <label>Gender</label>
                  <select required=''>
                    <option disabled='' selected=''>
                      Select gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className='input-field'>
                  <label>Where From Where To</label>
                  <input
                    type='text'
                    placeholder='Enter your Address'
                    required=''
                  />
                </div>
              </div>
            </div>
            <div className='details ID'>
              <span className='title'>Identity Details</span>
              <div className='fields'>
                <div className='input-field'>
                  <label>Registration No.</label>
                  <input
                    type='text'
                    placeholder='Enter Registration No.'
                    required=''
                  />
                </div>
                <div className='input-field'>
                  <label>State</label>
                  <input
                    type='text'
                    placeholder='Enter State name'
                    required=''
                  />
                </div>
                <div className='input-field'>
                  <label>Nationality</label>
                  <input
                    type='text'
                    placeholder='Enter Nationality'
                    required=''
                  />
                </div>
                <div className='input-field'>
                  <label>Reason</label>
                  <input
                    type='text'
                    placeholder='Enter Your Reason'
                    required=''
                  />
                </div>
                <div className='input-field'>
                  <label>From</label>
                  <input
                    type='date'
                    placeholder='Enter your leave start date'
                    required=''
                  />
                </div>
                <div className='input-field'>
                  <label>To</label>
                  <input
                    type='date'
                    placeholder='Enter your leave end date'
                    required=''
                  />
                </div>
              </div>
              <button className='nextBtn'>
                <span className='btnText'>Submit</span>
                <i className='uil uil-navigator' />
              </button>
            </div>
          </div>
        </form>
      </div>
    
  );
}

export default MentorLeave;
