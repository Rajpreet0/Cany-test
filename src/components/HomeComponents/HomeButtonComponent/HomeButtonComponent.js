import React from 'react';
import './HomeButtonComponent.css';
import {FaCannabis} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

function HomeButtonComponent() {
 
  const {t, i18n} = useTranslation();

    return (
       <> 
       <div className="homeButton_headline">
        <h1>
        {t('Home3DButton_Headline')}
        </h1>
        </div>
        <Fade top>
        <div className="homeButtonComponent">
           <div className="homeButton_Center">
            <a href="#"><span></span><span></span>{t('Home3DButton_Text')} <FaCannabis style={{marginLeft: 10, fontSize: 20}}/></a>
           </div> 
        </div>
        </Fade>
        </>   
    )
}

export default HomeButtonComponent
