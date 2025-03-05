// import React from 'react'
import React, { useState} from 'react';
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import "./Login.css";
import loginbg from '../../assets/loginbg.png';
import loginlogo from '../../assets/loginlogo.png';
import PMSlogo3 from '../../assets/PMSlogo3.png';



function Login() {


  const [inputFocus, setInputFocus] = useState({ username: false, password: false });

  const navigate = useNavigate();


  const handleFocus = (field) => {
    setInputFocus((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    if (value === "") {
      setInputFocus((prev) => ({ ...prev, [field]: false }));
    }
  };


  // add handleSubmit on 23 feb 2025
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http//localhost:5000/auth/login', inputFocus)
    .then(result => {
      navigate('/dashboard')
    })
    .catch(err => console.log(err))

  };


  return (
    
    <div>
      <img className="login-bg" src={loginbg}/>
      <div className="img">
          <img src={loginlogo} />
      </div>
      <div className="container">

        <div className="login-content">
        <i className="fas fa-times close-icon" onClick={() => navigate('/')}></i>
          <form action="index.html" onSubmit={handleSubmit}>     
            
            {/* add onsubmit on 23 feb 2025 */}

            <img src={PMSlogo3}/>
            <h2 className="title">Log in</h2>
            {/* <div className="input-div one"> */}
            <div className={`input-div one ${inputFocus.username ? "focus" : ""}`}>
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username or Email</h5>
                {/* <input type="text" className="input" /> */}
                <input 
                  type="text" 
                  className="input" 
                  onFocus={() => handleFocus("username")} 
                  onBlur={(e) => handleBlur("username", e.target.value)} 
                /> 
              </div>
            </div>
            {/* <div className="input-div pass"> */}
            <div className={`input-div pass ${inputFocus.password ? "focus" : ""}`}>
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                {/* <input type="password" className="input" /> */}
                <input 
                  type="password" 
                  className="input" 
                  onFocus={() => handleFocus("password")} 
                  onBlur={(e) => handleBlur("password", e.target.value)} 
                />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <div className='loginname'>
            
            <Link to="/dashboard" input type="submit" className="Logbtn" >Login</Link>
            </div>
            {/* <div className="signup">
              <p>Don't have an account?</p>
              <Link to="/Signup">Sign Up</Link>
            </div> */}
            <p className="or">FOLLOW US ON</p>
            <div className="icons">
              <a href="#" className="google">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#" className="twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div> 
      
    
  )
}

export default Login;
