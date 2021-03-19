import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
        
            <div className="about-info">
                <h4 className="h4">I am<span className="aboutspan"> Jagatheeswar.R</span></h4>
                <p className="about-text">
                    Pursing my btech in Sastra University. To say about my self 
                    I am a self-motivated perosn with flexible charecter. 
                    I adapt myself to the situation. 
                    I have a keen intrest to learn new things. 
                    My hobbies are cycling, reading news, practicing new skills. 
                    </p>
                    <br />
                    <hr />
                    <br />
                    <h4><span className="strength">strengths</span></h4>
                    
                    <ul className="strengths">
                        <li className="strengths-list">Reliable</li>
                        <li className="strengths-list">Team Player</li>
                        <li className="strengths-list">Energetic</li>
                    </ul>
                    <br />
                    <hr />
                    <br />
                    <h4><span className="weak">Weakness</span></h4>
                    <ul className="strengths">
                        <li className="weak-list">Lacks confidence</li>
                        <li className="weak-list">Fear of failure</li>
                        <li className="weak-list">Overthinking</li>
                    </ul>
                    <br />
                    <hr />
                    <br />

        
                <div className="about-details">
                    <div className="left-section">
                        <p>Name</p>
                        <p>Age</p>
                        <p>City</p>
                        <p>State</p>
                        <p>Country</p>
                        <p>Schooling</p>
                        <p>Degree</p>
                        <p>University</p>
                    </div>
                    <div className="right-section">
                        <p>: Jagatheeswar.R</p>
                        <p>: 18</p>
                        <p>: Madurai</p>
                        <p>: TamilNadu</p>
                        <p>: India</p>
                        <p>: TVS Matriculation higher secondory School</p>
                        <span className="degree">: B.tech </span> <span>Electronics and communication engineering</span>
                        <p>Sastra Deemed to be University</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ImageSection;
