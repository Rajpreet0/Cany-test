import React from 'react';
import './HomeCards.css';

function HomeCards(props) {
    return (
        <div className="homeCards">
            <div className="homeCards_Cards">
               <div className="homeCards_Circle"></div>
               <div className="homeCards_Content">
                <h2>{props.homeCards_Headline}</h2>
                <p>{props.homeCards_Description}</p>
                <a href="#">{props.homeCards_Button}</a>
               </div>
               <img src={props.homeCards_Image}></img>
            </div>
            
        </div>
    )
}

export default HomeCards
