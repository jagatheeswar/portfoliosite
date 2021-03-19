import React from 'react';
import SkillsSection from '../Components/SkillsSection';

function OngoingProjects({image, title, text}) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img src={image} alt=""/>
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                    <hr  />
                    <hr />
                    <br />
                    <SkillsSection skill={'progress'} progress={'70%'} width={'76%'} />
                </div>
            </div>
        </div>
    )
}

export default OngoingProjects;
