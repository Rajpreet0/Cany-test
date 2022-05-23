import React, {useState} from 'react';
import './Contact.css';
import MobileHeader from '../../components/MobileHeader/MobileHeader';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {IoLocationOutline} from 'react-icons/io5';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFacebook,BsTwitter, BsLinkedin} from 'react-icons/bs';
import {AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai';


function Contact() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="contact_main">
            <MobileHeader isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
            <div className="contact_main_container">
            <div className="contact_box">
                   <div className="contact form">
                       <h3>Senden Sie eine Nachricht</h3>
                       <form>
                           <div className="contact_formBox">
                               <div className="row50">
                                  <div className="contact_inputBox">
                                    <span>Vorname</span>
                                    <input type="text" name="surname"    placeholder="Max" required></input>
                                  </div>
                                  <div className="contact_inputBox">
                                    <span>Nachname</span>
                                    <input type="text" name="lastname"  placeholder="Mustermann" required></input>
                                  </div>
                               </div>
                               <div className="row50">
                                  <div className="contact_inputBox">
                                    <span>Email</span>
                                    <input type="text" name="email"  placeholder="max.mustermann@email.com" required></input>
                                  </div>
                                  <div className="contact_inputBox">
                                    <span>Telefon</span>
                                    <input type="text" name="phone_number"  placeholder="+49 123 456789" required></input>
                                  </div>
                               </div>
                               <div className="row100">
                                  <div className="contact_inputBox">
                                    <span>Nachricht</span>
                                    <textarea  name="message"  placeholder="Deine Nachricht..." required></textarea>
                                  </div>
                               </div>   
                               <div className="row100">
                                  <div className="contact_inputBox">
                                     <input type="submit" value="Senden"></input>
                                  </div>
                               </div>
                           </div>
                       </form>
                   </div>
                   <div className="contact infoc">
                       <h3>Kontakt Info</h3>
                       <div className="contact_infoBox">
                           <div>
                               <span className="contact_span"><IoLocationOutline style={{ color: '#fff' , fontSize: 20}}/></span>
                               <p>Altemarktstr. 50, 
                                  48565 Steinfurt, <br/> NRW</p>
                           </div>
                           <div>
                               <span className="contact_span"><AiOutlineMail sx={{ color: '#fff' , fontSize: 20}}/></span>
                               <a href="mailto:bettinathunenmann@gmail.com">bettinathunenmann@gmail.com</a>
                           </div>
                           <div>
                               <span className="contact_span"><BsTelephone style    ={{ color: '#fff' , fontSize: 20}}/></span>
                               <a href="tel:+491633309564">+49 163 3309564</a>
                           </div>
                           <ul className="contact_sci">
                             <li><a href="https://www.linkedin.com/in/bettina-th%C3%BCnemann-57528a19a/"><BsLinkedin style={{ color: '#fff' , fontSize: 25}}/></a></li>
                             <li><a href="https://www.instagram.com/bettina_thue/"><AiOutlineInstagram style={{ color: '#fff' , fontSize: 25}}/></a></li>
                             <li><a href="#"><BsFacebook style={{ color: '#fff' , fontSize: 25}}/></a></li>
                             <li><a href="#"><BsTwitter style={{ color: '#fff' , fontSize: 25}}/></a></li>
                             <li><a href="#"><AiFillYoutube style={{ color: '#fff' , fontSize: 25}}/></a></li>
                           </ul>
                       </div>
                   </div>
                   <div className="contact map">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9799.02468563434!2d7.3996914!3d52.1205651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d8293eb59df1efc!2sBettina%20Th%C3%BCnemann!5e0!3m2!1sde!2sde!4v1634416366505!5m2!1sde!2sde" 
                    style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                   </div>
                </div>
            </div>
            <div className="footer_container">
             <Footer/>
            </div>
        </div>
    )
}

export default Contact
