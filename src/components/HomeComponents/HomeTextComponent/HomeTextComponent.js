import React from 'react'
import './HomeTextComponent.css';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

function HomeTextComponent() {

  const {t, i18n} = useTranslation();

    return (
        <div className="homeTextComponent">
        <Fade top> 
          <div style={{textAlign: 'center'}}>  
            <p>{t('HomeTitle-1')}</p> 
            <h2>{t('HomeTitle-2')}</h2>
            <h1>Cany</h1>
          </div>  
        </Fade>
        </div>
    )
}


export default HomeTextComponent
