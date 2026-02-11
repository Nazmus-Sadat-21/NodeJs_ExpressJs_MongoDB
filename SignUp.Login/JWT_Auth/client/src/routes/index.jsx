import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../components/Home"
import Register from "../components/Register";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Header from "../layouts/Header";
function index() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/register" element = {<Register/>}/>
            <Route path = "/profile" element = {<Profile/>}/>
        </Routes>
    
    </BrowserRouter>
  )
}

export default index
