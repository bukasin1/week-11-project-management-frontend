import React from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'

const Verify = () => {
    return (
        <div>
            <h2 className="verify">A verification Link Has Been sent to your Email Address. Once you Verify your Account, click <Link to="/login"> HERE</Link> to login</h2>
        </div>
    )
}

export default Verify
