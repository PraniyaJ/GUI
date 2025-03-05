// // import React from 'react'
// import React, { useState} from 'react';
// // import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import "./Signup.css";
// import loginbg from '../../assets/loginbg.png';
// import loginlogo from '../../assets/loginlogo.png';
// import PMSlogo3 from '../../assets/PMSlogo3.png';



// function Signup() {


//   const [inputFocus, setInputFocus] = useState({ username: false, password: false });

//   const navigate = useNavigate();


//   const handleFocus = (field) => {
//     setInputFocus((prev) => ({ ...prev, [field]: true }));
//   };

//   const handleBlur = (field, value) => {
//     if (value === "") {
//       setInputFocus((prev) => ({ ...prev, [field]: false }));
//     }
//   };


//   return (
    
//     <div>
//       <img className="login-bg" src={loginbg}/>
//       <div className="img">
//           <img src={loginlogo} />
//         </div>
//       <div className="container">
//         <div className="login-content">
//         <i className="fas fa-times close-icon" onClick={() => navigate('/')}></i>
//           <form action="index.html">
//             <img src={PMSlogo3}/>
//             <h2 className="title">Sign Up</h2>
//             {/* <div className="input-div one"> */}
//             <div className={`input-div one ${inputFocus.fullname ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Full Name</h5>
//                 {/* <input type="text" className="input" /> */}
//                 <input 
//                   type="text" 
//                   className="input" 
//                   onFocus={() => handleFocus("fullname")} 
//                   onBlur={(e) => handleBlur("fullname", e.target.value)} 
//                 /> 
//               </div>
//             </div>

//             <div className={`input-div one ${inputFocus.username ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Username</h5>
//                 {/* <input type="text" className="input" /> */}
//                 <input 
//                   type="text" 
//                   className="input" 
//                   onFocus={() => handleFocus("username")} 
//                   onBlur={(e) => handleBlur("username", e.target.value)} 
//                 /> 
//               </div>
//             </div>



//             <div className={`input-div one ${inputFocus.email ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Email</h5>
//                 {/* <input type="text" className="input" /> */}
//                 <input 
//                   type="text" 
//                   className="input" 
//                   onFocus={() => handleFocus("email")} 
//                   onBlur={(e) => handleBlur("email", e.target.value)} 
//                 /> 
//               </div>
//             </div>


//             {/* <div className="input-div pass"> */}
//             <div className={`input-div pass ${inputFocus.password ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Enter Password</h5>
//                 {/* <input type="password" className="input" /> */}
//                 <input 
//                   type="password" 
//                   className="input" 
//                   onFocus={() => handleFocus("password")} 
//                   onBlur={(e) => handleBlur("password", e.target.value)} 
//                 />
//               </div>
//             </div>
            
//             <div className='loginname'>
//             <input type="submit" className="Signbtn" value="Sign up" />
//             </div>
//             <div className="signup">
//               <p>Already have an account? </p>
//               <Link to="/Login">Log in</Link>
//             </div>
//             <p className="or">OR</p>
//             <div className="icons">
//               <a href="#" className="google">
//                 <i className="fa-brands fa-google"></i>
//               </a>
//               <a href="#" className="twitter">
//                 <i className="fa-brands fa-x-twitter"></i>
//               </a>
//               <a href="#" className="facebook">
//                 <i className="fa-brands fa-facebook-f"></i>
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div> 
      
    
//   )
// }

// export default Signup
