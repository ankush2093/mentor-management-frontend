import React from 'react'
import "./StudentProfile.css";

const StudentProfile = () => {
    return (
        <div className='container-xl px-4 mt-4'>
            {/* Account page navigation*/}
            <nav className='nav nav-borders'></nav>
            <hr className='mt-0 mb-4' />
            <div className='row'>
                <div className='col-xl-4'>
                    {/* Profile picture card*/}
                    <div className='card mb-4 mb-xl-0'>
                        <div className='card-header'>Student Profile</div>
                        <div className='card-body text-center'>
                            {/* Profile picture image*/}
                            <img
                                className='img-account-profile rounded-circle mb-2'
                                src='http://cdn.onlinewebfonts.com/svg/img_453063.png'
                                alt=''
                            />
                            {/* Profile picture help block*/}
                            <div className='small font-italic text-muted mb-4'>

                            </div>
                            {/* Profile picture upload button*/}
                            {/* <button className='btn btn-primary' type='button'>
                                Upload new image
                            </button> */}
                        </div>
                    </div>
                </div>
                <div className='col-xl-8'>
                    {/* Account details card*/}
                    <div className='card mb-4'>
                        <div className='card-header'>Student Details</div>
                        <div className='card-body'>
                            <form>

                                <div className='mb-3'>
                                    <label className='small mb-1' htmlFor='inputUsername'>
                                        Name - Mentoring System
                                    </label>

                                </div>
                                {/* Form Row*/}
                                <div className='row gx-3 mb-3'>
                                    {/* Form Group (first name)*/}
                                    <div className='col-md-6'>
                                        <label className='small mb-1' htmlFor='inputFirstName'>
                                            Reg.No- 20010112011265
                                        </label>

                                    </div>
                                    {/* Form Group (last name)*/}
                                    <div className='col-md-6'>
                                        <label className='small mb-1' htmlFor='inputLastName'>
                                            {/* Last name */}
                                        </label>

                                    </div>
                                </div>
                                {/* Form Row        */}
                                <div className='row gx-3 mb-3'>
                                    {/* Form Group ()*/}
                                    <div className='col-md-6'>


                                    </div>
                                    {/* Form Group (location)*/}
                                    <div className='col-md-6'>
                                        <label className='small mb-1' htmlFor='inputLocation'>
                                            {/* Address */}
                                        </label>

                                    </div>
                                </div>
                                {/* Form Group (email address)*/}
                                <div className='mb-3'>
                                    <label className='small mb-1' htmlFor='inputEmailAddress'>
                                        Email - 200101120107454@cutm.ac.in
                                    </label>

                                </div>
                                {/* Form Row*/}
                                <div className='row gx-3 mb-3'>
                                    {/* Form Group (phone number)*/}
                                    <div className='col-md-6'>
                                        <label className='small mb-1' htmlFor='inputPhone'>
                                            Branch - B.tech(CSE)
                                        </label>

                                    </div>
                                    {/* Form Group (birthday)*/}
                                    <div className='col-md-6'>
                                        <label className='small mb-1' htmlFor='inputBirthday'>

                                        </label>

                                    </div>
                                </div>
                                {/* Save changes button*/}
                                {/* <button className='btn btn-primary' type='button'>
                                    Save changes
                                </button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile