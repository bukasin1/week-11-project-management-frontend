import React from 'react'
import UseForm from './UseForm'
import './Login.css' 
import validateLogin from './ValidateLogin'
 
const FormLogin = () => {
    const {handleChange, values,  handleSubmit, errors} = UseForm(validateLogin)
    return (
        <div className="loginForm-content">
            <div className="check"></div><div className="check1 "></div>
            <br/>
            <div className="check"></div><div className="check1"></div>
            <hr className="horizon1"/>
         <form className="login" onSubmit={handleSubmit}>
             <div className="login-inputs">
                 <label htmlFor="email"
                 className="login-label">
                     Email Address
                 </label>
                 <br/>
                 <input id='email' type='name' name='email' className='login-input' placeholder='ugochukwu@company.com' value= {values.email} onChange={handleChange}/>
              {errors.email && <p className='message-error'>{errors.email}</p>}
             </div>
             <div className="login-inputs">
                 <label htmlFor="password"
                 className="login-label">
                     Password
                 </label>
                 <br/>
                 <input id='password' type='password' name='password' className='login-input' placeholder='password' value= {values.password} onChange={handleChange}/>
                 {errors.password && <p className='message-error'>{errors.password }</p>}
             </div>
             <button className='login-input-btn' type="submit"> Sign In</button>
         </form>
        </div>

    )
}

export default FormLogin
