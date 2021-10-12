import React, {useState } from 'react'
import axios from 'axios'


const UseForm = (validateLogin: { (values: any): any; (arg0: { email: string; password: string }): React.SetStateAction<{}> }) => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors]: any = useState({})
   
    const handleChange = (e: { target: { name: string; value: string } }) => {
        const {name, value } = e.target
        setValues({
            ...values,
            [name]: value
})
}
const handleSubmit =  async (e: { preventDefault: () => void }) => { 
    e.preventDefault()
    //console.log(values)
    const data  = await axios
    .post('http://localhost:4000/auth/login', values)
    
  console.log(data)
    

    setErrors(validateLogin(values))
}
return {handleChange, values, handleSubmit, errors}
}

export default UseForm
