import React, { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate();

    // useEffect(()=>{
    //     const token = localStorage.getItem("token")
        
    //       axios.get("http://localhost:5000/profile",{
    //         headers:{
    //              Authorization: token
    //         }
    //     })
    //     .then((res)=>{console.log(res)})
    //     .catch((err)=>{
    //         console.log(err)
    //         navigate("/login")

    //     })
      
    // },[navigate])

    useEffect(()=>{
        const token = localStorage.getItem("token")
        
       if(token){
           axios.get("http://localhost:5000/profile",{
            headers:{
                 Authorization: token
            }
        })
        
       }else{
        navigate("/login")
       }
      
    },[navigate])

  return (
    <div>
      <h1>Profile page</h1>
    </div>
  )
}

export default Profile

