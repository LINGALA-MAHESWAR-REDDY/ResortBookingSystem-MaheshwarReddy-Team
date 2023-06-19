import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    let navi=useNavigate("");
    const H=()=>{
        navi('/')
    }

  return (
    <div className={Signup}><center>
        <p>Username :</p>
        <input type="username"placeholder='enter your username'required></input>
        <p>E-Mail :</p>
        <input type="e-mail"placeholder='enter your password'required></input>
        <p>Create-Password :</p>
        <input type="create password"placeholder='create a password'required></input>
        <p>Confirm-Password:</p>
        <input type="comfirm password"placeholder='confirm your password'required></input><br>
        </br>
        <button onClick={H}>Submit</button>
            <p>Already have an account ?</p>
      <a href='Login'>Login</a>
      </center>
    </div>
  )
}

export default Signup
