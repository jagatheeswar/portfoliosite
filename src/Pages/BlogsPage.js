import React from 'react';
import Tittle from '../Components/Tittle';
import SkillsSection from '../Components/SkillsSection';

function BlogsPage() {
    return (
        <div >
            <Tittle title={'My Skills'} span={'My Skills'} />
            <p className="holypara">All the skills I acquired is by self learning. I am curious in learning new tech-skills. with the help of various online resources like coursera, udemy, youtube, geeksforgeeks, w3schools,etc. I learnt these things, and i have a deep working knowledge in these fields.</p>
            <div className="skillsContainer">
                
                <SkillsSection skill={'html'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'css'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Reactjs'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'django'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'c program'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'c++'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'bootstrap'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'nodejs'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'python'} progress={'40%'} width={'40%'} />
        </div>
        </div>
            
    )
}

export default BlogsPage;
