import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HomeTextComponent from '../../components/HomeComponents/HomeTextComponent/HomeTextComponent';
import HomeHero from '../../components/HomeHero/HomeHero';
import './Home.css';
import { Animator, ScrollContainer, ScrollPage, batch,  FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import HomeButtonComponent from '../../components/HomeComponents/HomeButtonComponent/HomeButtonComponent';
import HomeButtonCards from '../../components/HomeComponents/HomeButtonCards/HomeButtonCards';
import HomeCards from '../../components/HomeComponents/HomeCards/HomeCards';
import CannabisSvg from '../../images/home_images/cannabis.svg';
import Maps from '../../images/home_images/maps.png';
import SocialMedia from '../../images/home_images/socialmedia.png';
import { useTranslation } from 'react-i18next';
import MobileHeader from '../../components/MobileHeader/MobileHeader';
import Fade from 'react-reveal/Fade';

function Home() {
 

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    const {t, i18n} = useTranslation();
     
    return (
        <div className="home_main">  
            <MobileHeader isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
            <HomeHero/>
            <div className="home_container">
 
                     <HomeTextComponent/>

                      <Fade left>
                       <HomeCards 
                       homeCards_Headline="Cany Weed" 
                       homeCards_Description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" 
                       homeCards_Button={t('HomeCards-Buttons-1')} 
                       homeCards_Image={CannabisSvg}/>
                      </Fade>
                      
                      <Fade right>
                       <HomeCards 
                       homeCards_Headline="Cany Maps" 
                       homeCards_Description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" 
                       homeCards_Button={t('HomeCards-Buttons-2')}  
                       homeCards_Image={Maps}/>
                      </Fade>
 
                      <Fade left>
                       <HomeCards
                        homeCards_Headline="Cany Media" 
                        homeCards_Description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" 
                        homeCards_Button={t('HomeCards-Buttons-3')}  
                        homeCards_Image={SocialMedia}/>
                      </Fade>

                      <Fade bottom>
                       <HomeButtonCards/>
                      </Fade> 

                       <HomeButtonComponent/>

             
            </div>
            <div className="footer_container">
             <Footer/>
            </div>
        </div>
    )
}

export default Home
