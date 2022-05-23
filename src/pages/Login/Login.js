import React from 'react'
import './Login.css';
import Login_Background from '../../images/auth_img/login_background.jpg'
import {FcGoogle} from 'react-icons/fc';


function Login() {
 

    return (
        <div className="auth_main">
            <section>
                <div className="auth_imgBx">
                    <img src={Login_Background}></img>
                </div>
                <div className="auth_contentBx">
                  <div className="auth_formBx">
                     <h2>Login</h2>
                     <form>
                         <div className="auth_inputBx">
                            <span>Email</span>
                            <input type="text" ></input>
                         </div>
                         <div className="auth_inputBx">
                            <span>Password</span>
                            <input type="password"></input>
                         </div>
                         <div className="auth_remeber">
                            <label><input type="checkbox" /> Remember me</label>
                         </div>
                         <div className="auth_inputBx">
                             <input type="submit" value="Login" ></input>
                         </div>
                         <div className="auth_inputBx">
                           <p>Don't have an account? <a href="/register">Register</a></p>
                          <div className="auth_inputBx_a"> 
                           <a href="forgot-password">Forgot Password ?</a>
                          </div> 
                         </div>
                     </form>
                     <h3>Login with Google</h3>
                     <ul className="auth_sci">
                         <li><FcGoogle className="auth_google_icon"/></li>
                     </ul>
                  </div>
                </div>
            </section>
        </div>
    )
}

export default Login
