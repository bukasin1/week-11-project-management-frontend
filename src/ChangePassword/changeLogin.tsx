import React from 'react'
import UsePassword from './UsePassword'
import '../login/Login.css' 
import validateLogin from '../login/ValidateLogin'
import {Link} from "react-router-dom"

 
const ChangeLogin =  () => {
    const {handleChange, values, handleSubmit, errors, message} = UsePassword(validateLogin)
    return (
        <div className="container">
        <div className="loginForm-content">
        
         <form className="login" onSubmit={handleSubmit} >
             <div className="login-inputs">
                 <label htmlFor="email"
                 className="login-label">
                     Old Password
                 </label>   
                 <br/>
                 <input id='Password' type='password' name='oldPassword' className='login-input' value= {values.oldPassword} onChange={handleChange}/>
              {errors.oldPassword && <p className='message-error'>{errors.oldPassword}</p>}
             </div>
             <div className="login-inputs">
                 <label htmlFor="password"
                 className="login-label">
                     New Password
                 </label>
                 <br/>
                 <input id='password' type='password' name='newPassword' className='login-input' value= {values.newPassword} onChange={handleChange}/>
                 {errors.newPassword && <p className='message-error'>{errors.newPassword }</p>}
                 
             </div>
             <div className="login-inputs">
                 <label htmlFor="password"
                 className="login-label">
                     Re-Enter New Password
                 </label>
                 <br/>
                 <input id='password' type='password' name='repeatPassword' className='login-input' value= {values.repeatPassword} onChange={handleChange}/>
                 {errors.repeatPassword && <p className='message-error'>{errors.repeatPassword }</p>}
                 {errors.OnMatchPassword && <p className='message-error'>{errors.OnMatchPassword }</p>}
                 
             </div>
             
             <button className='login-input-btn' type="submit">Change Password</button>
    
         </form>
         
        </div>
        </div>

    )
}

export default ChangeLogin
