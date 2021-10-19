import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import "./Success.css"


const LoginSuccess = () => {
    const {userToken} = useParams() as any
    let logged
    if(userToken){
        console.log(userToken)
        const user = userToken.split('~').slice(1).join('~')
        const token = userToken.split('~')[0]
        logged = JSON.parse(user)
        console.log(user)
        console.log(logged)
        localStorage.setItem('token', token)
        localStorage.setItem('user', user)
    }
    logged = JSON.parse(localStorage.getItem('user') as string)

    return (
        <div className="welcom">
            <div className="wel-page">
               <h1> Welcome Back {logged.firstname} </h1>
            </div>
        </div>
    )
}

export default LoginSuccess
