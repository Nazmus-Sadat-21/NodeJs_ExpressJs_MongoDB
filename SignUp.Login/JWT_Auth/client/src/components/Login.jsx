import React, { useState , useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [name,setusername] = useState("")
    const [password,setpass] = useState("")
    const navigate = useNavigate();


     

 useEffect(()=>{
    const token = localStorage.getItem("token")

    if(token){
        axios.get("http://localhost:5000/profile",{
            headers:{
                Authorization: token   
            }
        })
        .then((res)=>{
            console.log(res)
            navigate("/profile")
        })
        .catch((err)=>{
            console.log(err)
            
        })
    }
}, [navigate])   

// useEffect(() => {
//     const token = localStorage.getItem("token");
//     if(!token) return;

//     const fetchProfile = async () => {
//         try {
//             const res = await axios.get("http://localhost:5000/profile", {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             console.log("Profile data:", res.data);
//             navigate("/profile");
//         } catch(err){
//             console.error("Profile fetch error:", err.response?.status, err.response?.data);
//         }
//     }

//     fetchProfile();
// }, [navigate]);



const handleLogin = ()=>{
        axios.post("http://localhost:5000/login" ,{name,password})
        .then((user)=>{
            localStorage.setItem("token",user.data.token)
            
            console.log("User Login successful")
            navigate("/profile")
            
        })
        .catch((err)=>{
            console.log(err)
            navigate("/login")
            alert(err)
        })
    }


   
  return (
    <div>
      <h1>LogIn Page</h1>      

    <input type="text" placeholder="Username"  required value={name} 
    onChange={(e)=>{setusername(e.target.value)}} /> <br /> <br />
    <input type="password" placeholder="Password"  required value={password} 
    onChange={(e)=>{setpass(e.target.value)}}/> <br /> <br />
      
    <button type='submit' onClick={handleLogin}>LogIn</button>
   

    </div>
  )
}

export default Login



