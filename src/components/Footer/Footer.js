import React from 'react';
import logo from '../../images/cannabis.png';
import {BsFacebook,BsTwitter, BsLinkedin} from 'react-icons/bs';
import {AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const {t, i18n} = useTranslation();

    return (
        <div className="footer_main">
            <footer>
                <div className="footer_content">
                    <div className="footer_top">
                        <div className="footer_logo_details">
                            <img src={logo} onClick={() => scrollToTop()}></img>
                            <span className="footer_logo_name" onClick={() => scrollToTop()} style={{cursor: 'pointer', marginLeft: 10}}>Cany</span>
                        </div>
                        <div className="footer_media_icons">
                            <a href="#"><BsFacebook className="f_media_icons"/></a>
                            <a href="#"><BsTwitter className="f_media_icons"/></a>
                            <a href="#"><AiOutlineInstagram className="f_media_icons"/></a>
                            <a href="#"><BsLinkedin className="f_media_icons"/></a>
                            <a href="#"><AiFillYoutube className="f_media_icons"/></a>
                        </div>
                    </div>
                    <div className="footer_link_boxes">
                       <ul className="footer_box">
                           <li className="footer_link_name">Company</li>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">Contact us</a></li>
                           <li><a href="#">About us</a></li>
                           <li><a href="/imprint">Imprint</a></li>
                       </ul>
                       <ul className="footer_box">
                           <li className="footer_link_name">Services</li>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">Contact us</a></li>
                           <li><a href="#">About us</a></li>
                           <li><a href="#">Home</a></li>
                       </ul>
                       <ul className="footer_box">
                           <li className="footer_link_name">Account</li>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">Contact us</a></li>
                           <li><a href="#">About us</a></li>
                           <li><a href="#">Home</a></li>
                       </ul>
                       <ul className="footer_box">
                           <li className="footer_link_name">Courses</li>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">Contact us</a></li>
                           <li><a href="#">About us</a></li>
                           <li><a href="#">Home</a></li>
                       </ul>
                       <ul className="footer_box input_box">
                           <li className="footer_link_name">{t('Footer_Subscribe_Headline')}</li>
                           <li><input type="text" placeholder={t('Footer_Subscribe_Input')}></input></li>
                           <li><input type="button" value={t('Footer_Subscribe_Button')} style={{cursor: 'pointer'}}></input></li>
                       </ul>
                    </div>
                </div>
                <div className="footer_bottom_details">
                  <div className="footer_bottom_text">
                     <span className="footer_copyright_text">{t('Footer_Copyright_Text')}</span>
                     <span>
                         <a href="/privacy-policy">{t('Footer_Privacy_Policy')}</a>
                         <a href="/terms&condition">{t('Footer_Terms_Condition')}</a>
                     </span>
                  </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
