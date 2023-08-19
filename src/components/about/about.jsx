import React from 'react';
import "./about.css"
import Info from "./info"
import AboutImg from "../../assets/about1.JPG"
import CV from "../../assets/CV.pdf"
const About = () => {
    return (
        <section className='about section' id='about'>
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className='about__img' />
                <div className="about__data">
                    <Info />
                    <p className='about__description'>Front-end web developer with expertise in React & React Redux, I am passionate 
about creating responsive and user-friendly web applications. I have a good 
foundation in HTML, CSS, Bootstrap, Photoshop, JavaScript, and related web 
technologies, and i am constantly striving to improve my skills and stay up-to-date 
                        with the latest web development trends.</p>
                    <a download="" href={CV} className="button button--flex"><h6 style={{color:"white", marginBottom:"0"}}> Download CV <i class="fa-solid fa-file-arrow-down" style={{marginLeft:"3px"}}></i></h6></a>
                </div>
            </div>
        </section>
    );
}

export default About;
