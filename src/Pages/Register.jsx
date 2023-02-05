import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import { NavLink } from 'react-router-dom';
import AnimatedPage from '../Animations/AnimatedPage';
import { useEffect, useState } from 'react';
import AnimatedText from '../Animations/AnimatedText';


function Register() {

  

  return (
    <AnimatedPage>
    <div className="register-container" >
      
      {/* LEFT CONTAINER */}
      <div className="left-1">
        <AnimatedText><section className="copy">
          <h1>Welcome to <span>M-Care</span></h1>
          <p>All your Health tools in One Place</p>
        </section>
        </AnimatedText>
      </div>


        {/* RIGHT CONtAINER */}
      <div className="right-1">
        
        {/* FORM */}
        <AnimatedText>
        <form action='#'>
          <section className="copy">
            <h2>Register</h2>
              <p>
                Already have an account?{" "}
               <Routes>
                <Route path='/Login' element={<Login />} />
               </Routes>
               <a href="./Login">
                  <strong>Login</strong>
                </a>
              </p>
          </section>
          <div className="input-container-name">
            <label htmlFor="fname">Full Name</label>
            <input id="fname" name="fname" type="text" placeholder='Enter Full Name'/>
          </div>
          

          <div className="input-container-adhar">
            <label htmlFor="fadhar">Aadhar Number</label>
            <input id="fadhaar" name="fadhaar" type="text" placeholder='Enter Aadhar Number' />
          </div>
          
          <div className="input-container-password">
            <label htmlFor="fpass">Password</label>
            <input id="fpass" name="fpass" type="password" placeholder='Enter Password'/>
          </div>
          

          <button className="reg-btn" type="submit">
            Register
          </button>

          <section className="copy-legal">
            <p className="small">
              <span className="small">
                By continuing, you agree to accept our <br />{" "}
                <a href="#">Privacy Policy</a> &amp;{" "}
                <a href="#">Terms of Service</a>.
              </span>
            </p>
          </section>
        </form>
        </AnimatedText>
      </div>


    </div>
    </AnimatedPage>
  );
}

export default Register;
