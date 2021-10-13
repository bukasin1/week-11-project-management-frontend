


export default function validateLogin(values: any){
    let errors: any= {}

if (!values.email){
    errors.email = "Email is Required"
}  
else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {  
errors.email = "Email Address is Invalid"
}

if (!values.password){
    errors.password = "Password is Required"
}
else if (values.password.length < 5){
    errors.password = "Password must not be Less than 5 characters"
}
return errors
}

