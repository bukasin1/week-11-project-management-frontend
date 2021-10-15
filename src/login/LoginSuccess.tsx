import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./Success.css"


const LoginSuccess = () => {
    const [user, setUser]:any = useState()

    async function getUserProfile(){

        await axios.get('https://jaraaa.herokuapp.com/profile', {withCredentials:true})
        .then(response => {
            const data = response.data as any
            console.log("Major:",data.user.firstname)
            setUser(data.user.firstname)   
        }).catch(err=>{
            console.log(err.response.data.msg);
            window.location.href = "/login"
    
        })
    }


    useEffect(() => {
        window.addEventListener('load', getUserProfile)
        return () => window.addEventListener('load', getUserProfile)
    }, []);

    return (
        <div className="welcom">
            <div className="wel-page">
               <h1> Welcome Back {user} </h1>
            </div>
        </div>
    )
}

export default LoginSuccess
