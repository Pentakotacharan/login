import React, { useState } from 'react'
import './Login.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


const Login = () => {

     
const[action, setAction]=useState('');
       
      const resistrationlink =()=>{
        setAction(' active');
      }

      const loginlink =()=>{
        setAction('');
      }


 

  return (
    <div className={`wrapper${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                <input type="text" id="username" name="username" placeholder="username" required/>
                <div className="icon">
                <FaUser />
                </div>
                </div>
                <div className="input-box">
                <input type="password" id="password" name="password" placeholder="password" required/>
                <div className="icon">
                <RiLockPasswordFill />
                </div>
                </div>
                <div className="remember-link">
                   <label><input type="checkbox"/>Remember me</label><a href="#">Forget password</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have account? <a href="#" onClick={resistrationlink}> Register</a></p>
                </div>
              </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                <input type="text" id="username" name="username" placeholder="username" required/>
                <div className="icon">
                <FaUser />
                </div>
                </div>
                <div className="input-box">
                <input type="e-mail" id="e-mail" name="e-mail" placeholder="e-mail" required/>
                <div className="icon">
                <MdEmail />
                </div>
                </div>
                <div className="input-box">
                <input type="password" id="password" name="password" placeholder="password" required/>
                <div className="icon">
                <RiLockPasswordFill />
                </div>
                </div>
                <div className="remember-link">
                   <label><input type="checkbox"/>I Agree to all terms & conditions</label>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>Already have an account? <a href="#" onClick={loginlink}>Login</a></p>
                </div>
              </form>
        </div>
    </div>
  )
}

export default Login