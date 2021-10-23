import React from 'react'
import UsePassword from './UsePassword'
import '../login/Login.css'
import validateLogin from '../login/ValidateLogin'
import {Link} from "react-router-dom"
import Side from "../Sidebar/Side"
 import "./Change.css"
const ChangeLogin =  () => {
    const {handleChange, values, handleSubmit, errors, message} = UsePassword(validateLogin)
    return (
        <div className="chan-container1">
        <div className="change-container">
         <form className="change-password" onSubmit={handleSubmit} >
             <div className="change-inputs">
                 <label htmlFor="email"
                 className="change-label">
                     Old Password
                 </label>
                 <br/>
                 <input id='Password' type='password' name='oldPassword' className='change-input' value= {values.oldPassword} onChange={handleChange} required/>
              {errors.oldPassword && <p className='message-error'>{errors.oldPassword}</p>}
             </div>
             <div className="change-inputs">
                 <label htmlFor="password"
                 className="change-label">
                     New Password
                 </label>
                 <br/>
                 <input id='password' type='password' name='newPassword' className='change-input' value= {values.newPassword} onChange={handleChange} required/>
                 {errors.newPassword && <p className='message-error'>{errors.newPassword }</p>}
             </div>
             <div className="change-inputs">
                 <label htmlFor="password"
                 className="change-label">
                     Re-Enter New Password
                 </label>
                 <br/>
                 <input id='password' type='password' name='repeatPassword' className='change-input' value= {values.repeatPassword} onChange={handleChange} required/>
                 {errors.repeatPassword && <p className='message-error'>{errors.repeatPassword }</p>}
                 {errors.OnMatchPassword && <p className='message-error'>{errors.OnMatchPassword }</p>}
             </div>
             <p className="mess-age1">{message}</p>
             <button className='change-input-btn1' type="submit">Change Password</button>
              <p className="btn-cancel">cancel</p>
         </form>
         </div>
        </div>
    )
}
export default ChangeLogin
