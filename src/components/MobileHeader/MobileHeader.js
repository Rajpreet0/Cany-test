import React, {useState} from 'react';
import './MobileHeader.css';
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import styled from "styled-components";
import {FaLanguage} from 'react-icons/fa';
import logo from '../../images/cannabis.png';
import { useTranslation } from 'react-i18next';
import us from '../../images/flags/us.svg';
import cn from '../../images/flags/cn.svg';
import de from '../../images/flags/de.svg';
import es from '../../images/flags/es.svg';
import fr from '../../images/flags/fr.svg';
import ind from '../../images/flags/in.svg';
import nl from '../../images/flags/nl.svg';
import ru from '../../images/flags/ru.svg';
import tr from '../../images/flags/tr.svg';
import i18n from '../../i18n';

function MobileHeader({isOpen, toggle}) {

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
         <MobileHeader_Container
             isOpen={isOpen} 
            onClick={toggle}>
            <div className="MobileHeader_Icon" onClick={toggle}>
               <AiOutlineClose style={{color: '#41b787'}}/>
            </div>
            <div className="MobileHeader_Wrapper">
               <ul>
                   <a>{t('Header-1')}</a>
                   <a>{t('Header-2')}</a>
                   <a>{t('Header-3')}</a>
                   <a>{t('Header-4')}</a>
               </ul>
               <div className="MobileHeader_BtnWrapper">
                   <a>{t('Header-5')}</a>
               </div>
               <FaLanguage onClick={toggleModal} className="MobileHeader_LanguageIcon"/>
            </div>
        </MobileHeader_Container>

        {modal && (
            <div className="modal">
                <div className="overlay">
                  <div className="modal-content">
                    <h2>Select a Language</h2>
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

export default MobileHeader


export const MobileHeader_Container = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #f7f6f7;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
top: ${({ isOpen }) => (isOpen ? '0'  : '-100%')};
`