import React, { useState } from 'react';
import {FaLanguage} from 'react-icons/fa';
import {HiMenuAlt3} from 'react-icons/hi';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import logo from '../../images/cannabis.png';
import us from '../../images/flags/us.svg';
import cn from '../../images/flags/cn.svg';
import de from '../../images/flags/de.svg';
import es from '../../images/flags/es.svg';
import fr from '../../images/flags/fr.svg';
import ind from '../../images/flags/in.svg';
import nl from '../../images/flags/nl.svg';
import ru from '../../images/flags/ru.svg';
import tr from '../../images/flags/tr.svg';
import './Header.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function Header({toggle}) {

   
 
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    const changeLanguage = (ln) => {
        return() => {
            i18n.changeLanguage(ln);
        }
    }  

    const {t, i18n} = useTranslation();
     
    return (
        <>
        <div className="header_main" >
            <div className="nav">
              <div className="navbar_container">
                 <img src={logo}></img>
                 <div className="navbar_mobile" onClick={toggle}>
                   <HiMenuAlt3 style={{color: '#4dc99a'}}/>
                 </div>
                 <ul>
                     <li>
                         <a href="#">{t('Header-1')}</a>
                     </li>
                     <li>
                         <a href="#">{t('Header-2')}</a>
                     </li>
                     <li>
                         <a href="#">{t('Header-3')}</a>
                     </li>
                     <li>
                         <a href="#">{t('Header-4')}</a>
                     </li>
                 </ul>        

                <div className="navBtn_Container">     
                  <div className="navBtn">
                     <a href="/login">{t('Header-5')}</a>
                  </div>
                  <a className="navBtn_Container_Language" onClick={toggleModal}>
                      <FaLanguage style={{fontSize: 28, color: '#41b787'}}/>
                 </a>
                </div>  
              </div>
            </div>
        </div>

         {modal && (
            <div className="modal">
                <div className="overlay">
                  <div className="modal-content">
                    <h2>{t('LanguageModel_Headline')}</h2>
                    <AiOutlineCloseCircle onClick={toggleModal} className="modal_close"/>
                    <div className="modal-content_languages">
                         <img src={us}></img>
                         <p onClick={changeLanguage('en')}>English</p>
                         <img src={de} style={{marginLeft: 25}}></img>
                         <p onClick={changeLanguage('de')}>Deutsch</p>
                    </div>
                    <div className="modal-content_languages">
                         <img src={fr}></img>
                         <p onClick={changeLanguage('fr')}>France</p>
                         <img src={es} style={{marginLeft: 30}}></img>
                         <p onClick={changeLanguage('es')}>Espanol</p>
                    </div>

                    <div className="modal-content_languages">
                         <img src={nl}></img>
                         <p onClick={changeLanguage('nl')}>Dutch</p>
                         <img src={ru} style={{marginLeft: 35}}></img>
                         <p onClick={changeLanguage('ru')}>Russian</p>
                    </div>

                    <div className="modal-content_languages">
                    <img src={cn}></img>
                         <p onClick={changeLanguage('cn')}>Mandarin</p>
                         <img src={ind} style={{marginLeft: 10}}></img>
                         <p onClick={changeLanguage('in')}>Hindi</p>
                    </div>

                    <div className="modal-content_languages">
                         <img src={tr}></img>
                         <p onClick={changeLanguage('tr')}>Turkey</p>
                    </div>
                  </div>
                </div>
            </div>
         )}
        </>
    )
}

export default Header


