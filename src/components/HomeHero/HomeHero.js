import React from 'react';
import './HomeHero.css';
import HomeHeroBackground from  '../../images/cannabis_bg.jpg';
import {FaCannabis} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

function HomeHero() {

    const {t, i18n} = useTranslation();

    return (
        <div className="home_heroConatiner">
            <div className="home_hero_bg">
               <img src={HomeHeroBackground}></img>
            </div>
           <Fade> 
            <div className="home_heroContent">
                  <h1 className="home_heroContent-h1">Cany</h1>
                  <p className="home_heroContent-p">{t('HomeMain_Subtitle')}</p>
               <div className="home_heroContent-btn">
                <a href="#">{t('HomeMain_Button')}</a>
                {/*<FaCannabis className="home_heroContent-btn-icon"/>*/}
               </div>  
            </div>
            </Fade>
        </div>
    )
}

export default HomeHero
