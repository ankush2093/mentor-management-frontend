import React from 'react'
import './Form.css';
const Form = () => {
    return (
        <div>
            <form>
                <h1 className='title'>Student Issue</h1>
            </form>
            <div class="Container">
            <label htmlFor="">Student Name</label>
                <input tpye="text" placeholder='Students name'></input>
                <br />
<label htmlFor="">Register Number</label>
                <input tpye="text" placeholder='Register name'></input>
                <br />
<label htmlFor="">Issue</label>
                <input tpye="text" placeholder='Issue'></input>


            </div>
        </div>
    )
}

export default Form
