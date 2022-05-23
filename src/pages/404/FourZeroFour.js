import React from 'react';
import './FourZeroFour.css';
import {BiSearchAlt} from 'react-icons/bi';
import {BsFacebook,BsTwitter, BsLinkedin} from 'react-icons/bs';
import {AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai';

function FourZeroFour() {
    return (
        <div className="error_main">
           <div className="rror_wrapper">
              <div className="error_errors-top">
                 <div className="error_errors-info">
                    <h3>404</h3>
                    <p>Oops! Page Not Found</p>

                    <form action="#" method="post" className="error_error-form">
                        <input type="search" name="" placeholder="Search Here" required="required"></input>
                        <button type="submit"><span><BiSearchAlt className="error_search"/></span></button>
                    </form>

                    <div className="error_social-icons">
                       <a href="#"><span><BsFacebook/></span></a>
                       <a href="#"><span><BsTwitter/></span></a>
                       <a href="#"><span><BsLinkedin/></span></a>
                       <a href="#"><span><AiOutlineInstagram/></span></a>
                       <a href="#"><span><AiFillYoutube/></span></a>
                    </div>

                 </div>
              </div>
              <div className="error_copyright-footer">
                  <div className="error_copy-right">
                     <p>2021 Error Page. All rights reserved | <a href="/">Cany</a></p>
                  </div>
              </div>
           </div>
        </div>
    )
}

export default FourZeroFour
