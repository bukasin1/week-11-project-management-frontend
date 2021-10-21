import React from 'react'
import UseForm from './UseForm'
import './Login.css'
import validateLogin from './ValidateLogin'
import { Link } from "react-router-dom"

const FormLogin = () => {
    const { handleChange, values, handleSubmit, errors, message } = UseForm(validateLogin)
    return (
        <div >
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
                    <div className="login-inputs">
                        <label htmlFor="email"
                            className="login-label">
                            Email Address
                        </label>
                        <br />
                        <input id='email' type='name' name='email' className='login-input' placeholder='ugochukwu@company.com' value={values.email} onChange={handleChange} />
                        {errors.email && <p className='message-error'>{errors.email}</p>}
                    </div>
                    <div className="login-inputs">
                        <label htmlFor="password"
                            className="login-label">
                            Password
                        </label>
                        <br />
                        <input id='password' type='password' name='password' className='login-input' placeholder='password' value={values.password} onChange={handleChange} />
                        {errors.password && <p className='message-error'>{errors.password}</p>}

                    </div>
                    <p className="mess-age">{message}</p>
                    <button className='login-input-btn' type="submit">Sign In</button>
                    <p className="mess-age"><Link to={"/forgotpassword"}>Forgot password?   </Link> </p>
                    <p className="mess-age">Don't have an account yet?  <Link to={"/signup"}>Sign Up </Link> </p>

                </form>

            </div>
        </div>

    )
}

export default FormLogin
