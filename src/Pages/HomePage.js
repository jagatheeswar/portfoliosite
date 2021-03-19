import React from 'react';
import {faFacebook, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="curvedbgs">
            <div className="flag"></div>
            <div className="curvedbg"></div>
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
       <p><span className="homespan">Jagatheeswar</span></p>
                </h1>
                                    
                <p className="h-sub-text">
                    
                </p>
                <div className="icons">
                <a target="_blank" className="icon-holder" href="https://www.linkedin.com/in/jagatheeswar-r-1200b8203/">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon fb"/>
                        </a>
                    <a target="_blank" className="icon-holder" href="https://www.instagram.com/jagatheeswar_300/">
                        <FontAwesomeIcon icon={faInstagram} className="icon yt"/>
                        </a>
                    <a target="_blank" className="icon-holder" href="https://github.com/jagatheeswar">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                        </a>
                </div>
                
            </header>
        </div>
        </div>
        
        
    )
}

export default HomePage;