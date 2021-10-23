import React from 'react'
import UseForm from './UseForm'
import './Login.css'
import validateLogin from './ValidateLogin'
import { Link } from "react-router-dom"
import Facebook from '../Signup/facebook.svg'
import Google from '../Signup/google.svg'

const FormLogin = () => {
    const { handleChange, values, handleSubmit, errors, message } = UseForm(validateLogin)
    return (
    
            <div className="loginForm-content">
                <div className="loginForm_box">
                <div className="check"></div>
                <div className="check1 "></div>
                <br />
                <div className="check"></div>
                <div className="check1"></div>
             <hr className="horizon1" /> 
                </div>

                <form className="login" onSubmit={handleSubmit} >
                    
                        <label htmlFor="email"
                            className="login-label">
                            Email Address
                        </label>
                        <br />
                        <input id='email' type='email' name='email' className='login-input' placeholder='ugochukwu@company.com' value={values.email} onChange={handleChange} required/>
                        
                        <label htmlFor="password"
                            className="login-label">
                            Password
                        </label>
                        <br />
                        <input id='password' type='password' name='password' className='login-input' placeholder='password' value={values.password} onChange={handleChange} required/>
                        {errors.password && <p className='message-error'>{errors.password}</p>}

                   
                    <p className="mess-age1">{message}</p>
                    <button className='login-input-btn' type="submit">Sign In</button>
                    
                   
          <div className="btn_message">
          <p className="mess-age"><Link to={"/forgotpassword"}>Forgot password </Link> </p>
         <p className="mess-age"><Link to={"/signup"}>Create an Account</Link> </p>
            </div>
                <div className="btn_socials">
                <img src = {Facebook} className = 'login-facebook'/>
                <button className='login-input-btn-social'><a href="https://jaraaa.herokuapp.com/auth/facebook">Use Facebook</a></button>
                <img src = {Google} className = 'login-google' />
                
                <button className='login-input-btn-social2'><a href="https://jaraaa.herokuapp.com/auth/google">Use Google</a></button>
            </div>

                </form>

            </div>
        

    )
}

export default FormLogin
