import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import OngoingProjects from '../Components/OngoingProjects';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import suven from '../img/suven.pdf';
import utsav from '../img/utsacertificate.jpg';
import { Lines } from 'react-preloaders';

function AboutPage() {
    return (
        <React.Fragment>
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
                
            <ImageSection />
            <Tittle title={'Work experience'} span={'experience'} />
            <br
            />
            <div className="light">
               1) Did a remote internship in <b>Suven Consultants and Technologies </b> 
                 Built UI of 4 websites.  
                </div>
              <br></br>              
                <embed src={suven} width="100% vw" height="500px" 
 type="application/pdf"></embed>
 <br />
 <br />

 
 <div className="light">
     
     2) Organized some events in college fest,<b> Utsav</b>, and learnt how to work as a team. 
 </div>
 <br />
 <img src={utsav} width="100% vw" height="500px" className="aboutimage"></img>
        </div>
        
        </React.Fragment>
        
)
}

export default AboutPage;
