import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navi = useNavigate("");
  const D=()=>{
    navi('/')
  }
  const [username, setusername]=useState("");
  const [Password, setPassword]=useState("");
  const d=()=>{

  
  if(username === ""){
    alert("Please enter your username")
  }
  else if(Password === ""){
    alert("Please enter your Password")
  }
  else{
    alert("You Completed Sucessfully")
  }
}

  return (
    <div className='Login'>
      <center>
        <p>Username</p>
      <input type="Username"placeholder='username'required></input>
      <p>Password:</p>
      <input type="Password"placeholder='password'required></input><br></br>
      <button onClick={D} varient="contained">Login</button> 
      </center>
      </div>
  )
}

export default Login
