import { Route, Routes } from 'react-router-dom';
import Register from './Register';


function Login() {
  return (
    <div className="login-container">
      <div className="left">
      <form action="#">
          <section className="copy">
            <h2>Login</h2>
              <p>
                Don't have an account?{" "}
                <Routes>
                <Route path='/Register' element={<Register />} />
               </Routes>
                <a href="./Register">
                  <strong>Register</strong>
                </a>
              </p>
          </section>
          {/* <div className="input-container-name">
            <label htmlFor="fname">Full Name</label>
            <input id="fname" name="fname" type="text" />
          </div> */}

          <div className="input-container-adhar">
            <label htmlFor="fadhar">Aadhar Number</label>
            <input id="fadhaar" name="fadhaar" type="text" placeholder='Enter Aadhar Number' />
          </div>

          <div className="input-container-password">
            <label htmlFor="fpass">Password</label>
            <input id="fpass" name="fpass" type="password" placeholder='Enter Password'/>
          </div>

          <button className="reg-btn" type="submit">
            Login
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
      </div>

      <div className="right">
        <section className="copy">
          <h1>Welcome to M-Care</h1>
          <p>All your Health tools in One Place</p>
        </section>
      </div>

    </div>
  );
}

export default Login;
