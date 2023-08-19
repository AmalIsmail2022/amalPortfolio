import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import './skills.css'
import Visual from './Visual';

const Skills = () => {
    return (
        <section className='skills section' id='skills'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Skills</span>
            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Visual />
                

                
            </div>
        </section>
    );
}

export default Skills;
