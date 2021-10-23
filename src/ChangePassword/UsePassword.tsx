import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UsePassword = (validateLogin: { (values: any): any; (arg0: { email: string; password: string }): React.SetStateAction<{}> }) => {
    const [values, setValues] = useState({
        oldPassword: '',
        newPassword: '',
        repeatPassword: ''
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
    const token = localStorage.getItem('token') as string
    console.log(token)
    await axios.request({url:'https://jaraaa.herokuapp.com/password/changepassword', method: "post", data: values, headers: {authorization: token}, withCredentials:true})
    .then(response => {
        setlogin(response.data)
        console.log("Major:",response.data)
        setmessage("Password successfully Changed")
            // window.location.href = "/home"
            setValues({
        oldPassword: '',
        newPassword: '',
        repeatPassword: ''
            })
          
    }).catch(err=>{
        console.log(err);
        setmessage("Invalid Password")

    })
    //console.log(message)
    // console.log(values)
    // setErrors(validateLogin(values))
}


useEffect(() => {

      
}, []);


return {handleChange, values, handleSubmit, errors, login, message}
}

export default UsePassword
