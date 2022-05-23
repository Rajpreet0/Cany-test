import React from 'react';
import './ForgotPassword.css';
import ForgotPassword_Background from '../../images/auth_img/forgot-password.jpg';

function ForgotPassword() {
    return (
<div className="auth_main">
            <section>
                <div className="auth_imgBx">
                    <img src={ForgotPassword_Background}></img>
                </div>
                <div className="auth_contentBx">
                  <div className="auth_formBx">
                     <h2>Forgot your Password? </h2>
                     <form>
                         <div className="auth_inputBx">
                            <span>Email</span>
                            <input type="text" ></input>
                         </div>
                         <div className="auth_inputBx">
                           <p>Go Back <a href="/login">Login</a></p>
                         </div>
                         <div className="auth_inputBx">
                             <input type="submit" value="Send" ></input>
                         </div>
                     </form>
                  </div>
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword;
