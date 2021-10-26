import axios from "axios";
import './Signup.css'
import { useRef, useState } from "react"
import { Link } from "react-router-dom";
import Facebook from './facebook.svg'
import Google from './google.svg'

function SignUp() {
  const [message, setmessage] = useState('')
  const [validate, setValidate] = useState('')
  const nameForm: any = useRef(null);
  function handler(e: any) {
    e.preventDefault()
    const form = nameForm.current;
    if (form.firstname.value || form.lastname.value === "" ||
      form.email.value === "" || form.password.value === ""
    ) {
    }

    const details = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      password: form.password.value
    }
    if (form.password.value !== form.password2.value) {
      setValidate("Password do not match")
    }
    axios.post('https://jaraaa.herokuapp.com/users/signup', details, { withCredentials: true })
      .then(response => {
        setmessage("Account Created successful")
        window.location.href = "/verify"
      }).catch(err => {
        setmessage(`Error: ${err.response.data}`)
      })

  }
  return (
    <div className="signup-container">
      <div className="header">
        <div className="firstDivElement1">
          <div className="mark"></div>
          <div className="dash1"></div>
        </div>
        <br/>
          <div className="mark"></div>
          <div className="dash1"></div>
          <hr className="horiz" />
      </div>
      
      <form className="form_body" onSubmit={handler} ref={nameForm}>
        <div className="body_info">
          <label className="form_label" htmlFor="firstname">
            First Name
          </label>
          <input className="form_input" type="text" name="firstname" required />
        </div>
        <div className="body_info">
          <label className="form_label" htmlFor="lastname">
            Last Name
          </label>
          <input type="text" className="form_input" name="lastname" required />
        </div>
        <div className="body_info">
          <label className="form_label" htmlFor="emailAddress">
            Email Address
          </label>
          <input type="email" className="form_input" name="email" required />
        </div>
        <div className="body_info">
          <label className="form_label" htmlFor="password">
            Password
          </label>
          <input type="password" className="form_input" name="password" required />
        </div>
        <div className="body_info">
          <label className="form_label" htmlFor="repeatedPassword">
            Repeat Password
          </label>
          <input  type="password" className="form_input" name="password2"  required/>
        </div>
        <h5 className="error_mssg"> {!validate ? message : validate}</h5>
        <div>
        <button type="submit" className = 'signup-button ' >
          Sign Up
        </button>
        </div>
        <p className = 'signup-p'>"Already have an account?  <Link to= {"/login"}> Login" </Link> </p>
        <div className="button-footer">
        <img src = {Google} className = 'signup-google' />
          <button className="button-google"><a href="https://jaraaa.herokuapp.com/auth/google">Use Google</a></button>
          <img src = {Facebook} className = 'signup-facebook'/>
          <button className="button-facebook"><a href="https://jaraaa.herokuapp.com/auth/facebook">Use Facebook</a></button>
        </div>

      </form>

    </div>

  )
}

export default SignUp;
