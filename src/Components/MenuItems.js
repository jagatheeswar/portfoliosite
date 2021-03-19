import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    
                                    <a target="_blank" className="icon-holder" href={item.link2}>
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                        </a>
                                    
                                </li>
                            </ul>
                        </div>
                        <a target="_blank" className="icon-holder" href={item.link1}>
                        
                        <h5>{item.title}</h5>
                        </a>
                        
                        
                        <br></br>
                        <p>{item.para}</p>
                    </div>
                    
                })
            }
            
        </div>
    )
}

export default MenuItems;

