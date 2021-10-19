


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
if (!values.oldPassword){
    errors.oldPassword = "Field Must Not be Empty"
}
else if (values.oldPassword.length < 5){
    errors.oldPassword = "length must not be Less than 5 characters"
}
if (!values.newPassword){
    errors.newPassword = "Field Must Not be Empty"
}
else if (values.newPassword.length < 5){
    errors.newPassword = "length must not be Less than 5 characters"
}
if (!values.repeatPassword){
    errors.repeatPassword = "Field Must Not be Empty"
}
else if (values.repeatPassword.length < 5){
    errors.repeatPassword = "length must not be Less than 5 characters"
}
else if (values.newPassword !== values.repeatPassword){
    errors.OnMatchPassword = "Password Do Not Match"
}
return errors
}

