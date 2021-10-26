import React, {useState, useEffect} from 'react'
import axios from 'axios'

interface changepasswordInt {
    email: string;
    password: string;
    token?: string;
   
}
const UseForm = (validateLogin: { (values: any): any; (arg0: { email: string; password: string }): React.SetStateAction<{}> }) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors]: any = useState({})
   
    const handleChange = (e: { target: { name: string; value: string } }) => {
        const {name, value } = e.target
        setValues({
            ...values,
            [name]: value
})
}
const  [login, setlogin]: any = useState('')
const [message, setmessage]: any = useState('')

const handleSubmit = async (e: { preventDefault: () => void }) => { 
    e.preventDefault()
    await axios.post('https://jaraaa.herokuapp.com/auth/login', values, {withCredentials:true})
    .then((response:any) => {
        setlogin(response.data)
        console.log("Major:",response.data)
        setmessage("login successful")
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.sendUser))
            window.location.href = "/home"
          
        
    }).catch(err=>{
        console.log(err.response.data.msg);
        setmessage("Error: " + err.response.data.msg)

    })
    //console.log(message)
    console.log(values)
    setErrors(validateLogin(values))
}


useEffect(() => {

      
}, []);


return {handleChange, values, handleSubmit, errors, login, message}
}

export default UseForm
