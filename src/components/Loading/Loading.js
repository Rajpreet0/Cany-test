import React from 'react'
import './Loading.css';
import Logo from '../../images/cannabis.png';
import ReactLoading from 'react-loading';

function Loading() {
    return (
        <div className="loading_main">
          <div className="loading_container">  
            <img src={Logo} alt="logo"></img>
            <ReactLoading type='spinningBubbles' color='#4bc999' width={160} className="loading_loader"/>
          </div>  
        </div> 
    )
}

export default Loading
