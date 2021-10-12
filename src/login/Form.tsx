import React from 'react'
import FormLogin from './FormLogin'
import "./Login.css"

const Form = () => {
    return (
        <div>
            <FormLogin />
            <br/>
            <button className='login-input-btn-social'><a href ="http://localhost:4000/auth/facebook">Use Facebook Account</a></button>
            <button className='login-input-btn-social'><a href ="http://localhost:4000/auth/facebook">Use Google Account</a></button>
        </div>
    )
}

export default Form
