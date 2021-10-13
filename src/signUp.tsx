import axios from "axios";
import  {useRef} from "react"
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


 function SignUp() {
    const nameForm: any = useRef(null);
     async function handler(e:any){
        e.preventDefault()
        const form = nameForm.current;
        if(form.firstname.value || form.lastname.value === "" || 
        form.email.value === "" || form.password.value === ""
    ){
            alert("Please fill up this form")
        }
        
       const details={
           firstname: form.firstname.value,
           lastname: form.lastname.value,
           email: form.email.value,
           password: form.password.value
       }
       console.log(details)
       const data = await axios.post('http://localhost:3002/users/SignUp', details)
       console.log(data)
       
     }
    return (
        <Router>
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
            <form onSubmit={handler} ref={nameForm}>
              <div className="body_info">
              <label htmlFor="firstname">
                 First Name
              </label>
              <input type="text"  name={'firstname'} required/>
              </div>
              <div className="body_info">
              <label htmlFor="lastname">
                 Last Name
              </label>
              <input type="text"  name={'lastname'}  required/>
              </div>
              <div className="body_info">
              <label htmlFor="emailAddress">
                 Email Address
              </label>
              <input type="email" name={'email'} required/>
              </div>
              <div className="body_info">
              <label htmlFor="password">
                Password
              </label>
              <input type="password" name={'password'}  required/>
              </div>
              <div className="body_info">
              <label htmlFor="repeatedPassword">
                Repeat Password
              </label>
              <input type="password"   />
              </div>
            <button type="submit">
            Sign Up
            </button>
            <div className="footer">
           <button><Link to="">Use Google Account</Link></button>
           </div>
            </form>
          
        </div>
        </Router>
    )
}

export default SignUp;
