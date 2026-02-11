import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name,setusername] = useState("")
    const [password,setpass] = useState("")
    const navigate = useNavigate();

    const handleRegister = ()=>{
        axios.post("http://localhost:5000/register" ,{name,password})
        .then(()=>{
            console.log("User Register successful")
            navigate("/login")
        })
        .catch((err)=>{
            console.log(err)
            navigate("/register")
            alert(err)
        })
    }

  return (
    <div>
      <h1>Register Page</h1>      

    <input type="text" placeholder="Username"  required value={name} 
    onChange={(e)=>{setusername(e.target.value)}} /> <br /> <br />
    <input type="password" placeholder="Password"  required value={password} 
    onChange={(e)=>{setpass(e.target.value)}}/> <br /> <br />
      
    <button type='submit' onClick={handleRegister}>Sign Up</button>
   

    </div>
  )
}

export default Register

