import React from 'react';
import './Register.css';
import Register_Background from '../../images/auth_img/register_background.jpg'
import {FcGoogle} from 'react-icons/fc';

function Register() {
    return (
<div className="auth_main">
            <section>
                <div className="auth_imgBx">
                    <img src={Register_Background}></img>
                </div>
                <div className="auth_contentBx">
                  <div className="auth_formBx">
                     <h2>Register</h2>
                     <form>
                         <div className="auth_inputBx">
                            <span>Username</span>
                            <input type="text" ></input>
                         </div>
                         <div className="auth_inputBx">
                            <span>Email</span>
                            <input type="text" ></input>
                         </div>
                         <div className="auth_inputBx">
                            <span>Password</span>
                            <input type="password"></input>
                         </div>
                         <div className="auth_inputBx">
                             <input type="submit" value="Register" ></input>
                         </div>
                         <div className="auth_inputBx">
                           <p>Have an account? <a href="/login">Login</a></p>
                         </div>
                     </form>
                     <h3>Register with Google</h3>
                     <ul className="auth_sci">
                         <li><FcGoogle className="auth_google_icon"/></li>
                     </ul>
                  </div>
                </div>
            </section>
        </div>
    )
}

export default Register
