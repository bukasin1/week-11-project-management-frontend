import React from 'react'
import FormLogin from './FormLogin'
import "./Login.css"
import "./UseForm"

const Form = () => {

    return (
        <div className="container">

            <FormLogin />
            {/* <br /> */}
            <div className="btn_socials">
                <button className='login-input-btn-social'><a href="https://jaraaa.herokuapp.com/auth/facebook">Use Facebook Account</a></button>
                <button className='login-input-btn-social'><a href="https://jaraaa.herokuapp.com/auth/google">Use Google Account</a></button>
            </div>
        </div>
    )
}

export default Form
