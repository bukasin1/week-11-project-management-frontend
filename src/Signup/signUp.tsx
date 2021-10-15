import axios from "axios";
import './Signup.css'
import  {useRef, useState} from "react"
import {Link} from "react-router-dom";

 function SignUp() {
   const [message, setmessage] = useState('')
   const [validate, setValidate] = useState('')
    const nameForm: any = useRef(null);
     async function handler(e:any){
        e.preventDefault()
        const form = nameForm.current;
        if(form.firstname.value || form.lastname.value === "" || 
        form.email.value === "" || form.password.value === ""
    )
    {
   
        }
        
       const details={
           firstname: form.firstname.value,
           lastname: form.lastname.value,
           email: form.email.value,
           password: form.password.value
       }
       if(form.password.value !== form.password2.value){
        setValidate("Password do not match")
       }
       
       await axios.post('https://jaraaa.herokuapp.com/users/signup', details, {withCredentials:true})
    .then(response => {
        console.log("Major:",response.data)
        setmessage("login successful")
            //window.location.href = "/success"
          
        
    }).catch(err=>{
        console.log(err.response.data.msg);
        setmessage (`Error: Email Already exist`)

    })
       
     }
    return (
        
        <div>
             <div className="header">
               <div className="firstDivElement">
                   <div className="mark"></div>
                   <div className="dash"></div>
               </div>
               <div className="secondDivElement">
                <div className="mark"></div>
                <div className="mark_dash"></div>
               </div>
              </div>
              <div className="divider"></div>
            <form  className="form_body" onSubmit={handler} ref={nameForm}>
              <div className="body_info">
              <label className="form_label" htmlFor="firstname">
                 First Name
              </label>
              <input  className="form_input" type="text"  name="firstname" required/>
              </div>
              <div className="body_info">
              <label className="form_label"  htmlFor="lastname">
                 Last Name
              </label>
              <input type="text" className="form_input"  name="lastname"  required/>
              </div>
              <div className="body_info">
              <label className="form_label" htmlFor="emailAddress">
                 Email Address
              </label>
              <input type="email" className="form_input" name="email" required/>
              </div>
              <div className="body_info">
              <label className="form_label" htmlFor="password">
                Password
              </label>
              <input type="password" className="form_input" name="password"  required/>
              </div>
              <div className="body_info">
              <label className="form_label" htmlFor="repeatedPassword">
                Repeat Password
              </label>
              <input type="password" name="password2"  className="form_input"/>
              </div>
              {!validate? message : validate}
              {/* //{message} */}
            <button type="submit">
            Sign Up
            </button>
            <p>"Already have an account yet? <Link to={"/login"}>Login" </Link> </p>
            <div className="footer">
           <button><a href="https://jaraaa.herokuapp.com/auth/google">Use Google Account</a></button>
           </div>
            </form>   
            
        </div>
      
    )
}

export default SignUp;
