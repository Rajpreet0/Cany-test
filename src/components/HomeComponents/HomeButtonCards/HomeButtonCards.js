import React from 'react';
import './HomeButtonCards.css';
import {FaBrain} from 'react-icons/fa';
import {GiChessKing} from 'react-icons/gi';
import {MdStore} from 'react-icons/md';
import { useTranslation } from 'react-i18next';

function HomeButtonCards() {
  const {t, i18n} = useTranslation();
    return (
        <div className="homeButtonCards">
            <div className="homButtonCards_Container">
                <div className="homButtonCards_Box">
                  <div className="homeButtonCards_Icon">
                     <MdStore className="homeButtonCards_Icon_icon"/>
                  </div>
                  <div className="homeButtonCards_Content">
                    <h3>{t('HomeButton-Cards-1')}</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore 
                        et dolore magna aliquyam erat, sed diam voluptua</p>
                  </div>
                </div>
                <div className="homButtonCards_Box">
                <div className="homeButtonCards_Icon">
                     <FaBrain className="homeButtonCards_Icon_icon"/>
                  </div>
                  <div className="homeButtonCards_Content">
                    <h3>{t('HomeButton-Cards-2')}</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore 
                        et dolore magna aliquyam erat, sed diam voluptua</p>
                  </div>
                </div>
                <div className="homButtonCards_Box">
                <div className="homeButtonCards_Icon">
                     <GiChessKing className="homeButtonCards_Icon_icon"/>
                  </div>
                  <div className="homeButtonCards_Content">
                    <h3>{t('HomeButton-Cards-3')}</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore 
                        et dolore magna aliquyam erat, sed diam voluptua</p>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default HomeButtonCards
